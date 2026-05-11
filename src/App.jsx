import { useState, useEffect, useRef, useCallback } from 'react'
import { getDailyPuzzle, getAllPuzzles } from './puzzles'

const MAX_GUESSES = 6

function normalizeAnswer(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '').trim()
}

function getStorageKey(puzzleNumber) {
  return `gynordle_puzzle_${puzzleNumber}`
}

function loadGameState(puzzleNumber) {
  try {
    const saved = localStorage.getItem(getStorageKey(puzzleNumber))
    if (saved) return JSON.parse(saved)
  } catch {}
  return null
}

function saveGameState(puzzleNumber, state) {
  try {
    localStorage.setItem(getStorageKey(puzzleNumber), JSON.stringify(state))
  } catch {}
}

function loadStats() {
  try {
    const saved = localStorage.getItem('gynordle_stats')
    if (saved) return JSON.parse(saved)
  } catch {}
  return { played: 0, won: 0, streak: 0, maxStreak: 0, distribution: [0, 0, 0, 0, 0, 0] }
}

function saveStats(stats) {
  try {
    localStorage.setItem('gynordle_stats', JSON.stringify(stats))
  } catch {}
}

function Game({ puzzle, puzzleNumber, mode }) {
  const saved = loadGameState(puzzleNumber)
  const [guesses, setGuesses] = useState(saved?.guesses || [])
  const [currentGuess, setCurrentGuess] = useState('')
  const [gameOver, setGameOver] = useState(saved?.gameOver || false)
  const [won, setWon] = useState(saved?.won || false)
  const [showSummary, setShowSummary] = useState(saved?.gameOver || false)
  const [copied, setCopied] = useState(false)
  const [shake, setShake] = useState(false)
  const inputRef = useRef(null)

  const cluesRevealed = Math.min(guesses.length + 1, puzzle.clues.length)

  useEffect(() => {
    if (!gameOver && inputRef.current) {
      inputRef.current.focus()
    }
  }, [guesses, gameOver])

  useEffect(() => {
    saveGameState(puzzleNumber, { guesses, gameOver, won })
  }, [guesses, gameOver, won, puzzleNumber])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    if (gameOver || !currentGuess.trim()) return

    const isCorrect = normalizeAnswer(currentGuess) === normalizeAnswer(puzzle.answer)
    const newGuesses = [...guesses, { text: currentGuess.trim(), correct: isCorrect }]
    setGuesses(newGuesses)
    setCurrentGuess('')

    if (isCorrect) {
      setWon(true)
      setGameOver(true)
      setShowSummary(true)
      const stats = loadStats()
      stats.played++
      stats.won++
      stats.streak++
      stats.maxStreak = Math.max(stats.maxStreak, stats.streak)
      stats.distribution[newGuesses.length - 1]++
      saveStats(stats)
    } else if (newGuesses.length >= MAX_GUESSES) {
      setGameOver(true)
      setShowSummary(true)
      const stats = loadStats()
      stats.played++
      stats.streak = 0
      saveStats(stats)
    } else {
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }, [currentGuess, gameOver, guesses, puzzle.answer, puzzleNumber])

  const handleShare = () => {
    const rows = Array.from({ length: MAX_GUESSES }, (_, i) => {
      if (i < guesses.length) {
        return guesses[i].correct ? '🟩' : '🟥'
      }
      return '⬛'
    })
    const text = `GYNordle #${puzzleNumber} 🩺\n${rows.join('\n')}\nhttps://gynordle.com`
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="game">
      <div className="puzzle-header">
        <span className="puzzle-category">{puzzle.category}</span>
        <span className="puzzle-progress">
          {guesses.length}/{MAX_GUESSES} guesses
        </span>
      </div>

      <div className="clues-container">
        {puzzle.clues.slice(0, cluesRevealed).map((clue, i) => (
          <div key={i} className="clue" style={{ animationDelay: `${i * 0.05}s` }}>
            <div className="clue-number">Clue {i + 1}</div>
            <div className="clue-text">{clue}</div>
          </div>
        ))}
        {!gameOver && cluesRevealed < puzzle.clues.length && (
          <div className="clue clue-locked">
            <div className="clue-number">Clue {cluesRevealed + 1}</div>
            <div className="clue-text locked-text">Submit a guess to reveal the next clue...</div>
          </div>
        )}
      </div>

      <div className="guesses-container">
        {guesses.map((g, i) => (
          <div key={i} className={`guess-row ${g.correct ? 'correct' : 'incorrect'}`}>
            <span className="guess-icon">{g.correct ? '✓' : '✗'}</span>
            <span className="guess-text">{g.text}</span>
          </div>
        ))}
      </div>

      {!gameOver && (
        <form onSubmit={handleSubmit} className="guess-form">
          <div className={`input-wrapper ${shake ? 'shake' : ''}`}>
            <input
              ref={inputRef}
              type="text"
              value={currentGuess}
              onChange={(e) => setCurrentGuess(e.target.value)}
              placeholder="Enter your diagnosis..."
              className="guess-input"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            <button type="submit" className="submit-btn" disabled={!currentGuess.trim()}>
              Submit
            </button>
          </div>
          <div className="guesses-remaining">
            {MAX_GUESSES - guesses.length} guess{MAX_GUESSES - guesses.length !== 1 ? 'es' : ''} remaining
          </div>
        </form>
      )}

      {showSummary && (
        <div className="summary-section">
          <div className={`result-banner ${won ? 'win' : 'loss'}`}>
            {won ? (
              <>
                <span className="result-emoji">🎉</span>
                <span>Correct! You got it in {guesses.length} guess{guesses.length !== 1 ? 'es' : ''}!</span>
              </>
            ) : (
              <>
                <span className="result-emoji">😔</span>
                <span>The answer was: <strong>{puzzle.answer}</strong></span>
              </>
            )}
          </div>

          <div className="answer-reveal">
            <h3>{puzzle.answer}</h3>
          </div>

          <div className="diagnosis-summary">
            <h4>Diagnosis Summary</h4>
            <p>{puzzle.summary}</p>
          </div>

          <div className="share-section">
            <button onClick={handleShare} className="share-btn">
              {copied ? 'Copied!' : 'Share Results'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function StatsModal({ onClose }) {
  const stats = loadStats()
  const winRate = stats.played > 0 ? Math.round((stats.won / stats.played) * 100) : 0
  const maxDist = Math.max(...stats.distribution, 1)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Statistics</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">{stats.played}</div>
            <div className="stat-label">Played</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{winRate}%</div>
            <div className="stat-label">Win Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{stats.streak}</div>
            <div className="stat-label">Streak</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{stats.maxStreak}</div>
            <div className="stat-label">Max Streak</div>
          </div>
        </div>
        <h3>Guess Distribution</h3>
        <div className="distribution">
          {stats.distribution.map((count, i) => (
            <div key={i} className="dist-row">
              <span className="dist-label">{i + 1}</span>
              <div className="dist-bar-wrapper">
                <div
                  className="dist-bar"
                  style={{ width: `${Math.max((count / maxDist) * 100, count > 0 ? 8 : 2)}%` }}
                >
                  {count}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ArchiveModal({ onClose, onSelect }) {
  const puzzles = getAllPuzzles()
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal modal-archive" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Puzzle Archive</h2>
        <p className="archive-subtitle">Practice with any past puzzle</p>
        <div className="archive-grid">
          {puzzles.map((p) => {
            const saved = loadGameState(`archive_${p.id}`)
            const status = saved?.won ? 'won' : saved?.gameOver ? 'lost' : null
            return (
              <button
                key={p.id}
                className={`archive-item ${status || ''}`}
                onClick={() => onSelect(p)}
              >
                <span className="archive-id">#{p.id}</span>
                <span className="archive-cat">{p.category}</span>
                {status === 'won' && <span className="archive-status">✓</span>}
                {status === 'lost' && <span className="archive-status fail">✗</span>}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function InfoModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>How to Play</h2>
        <div className="how-to-play">
          <p>Guess the <strong>OB/GYN diagnosis</strong> based on clinical clues!</p>
          <div className="rule">
            <span className="rule-icon">📋</span>
            <span>You start with the first clue of a clinical vignette.</span>
          </div>
          <div className="rule">
            <span className="rule-icon">💡</span>
            <span>Type your diagnosis and submit. If wrong, the next clue is revealed.</span>
          </div>
          <div className="rule">
            <span className="rule-icon">🎯</span>
            <span>You have <strong>6 guesses</strong> to identify the correct diagnosis.</span>
          </div>
          <div className="rule">
            <span className="rule-icon">📚</span>
            <span>After solving (or failing), read the diagnosis summary to learn!</span>
          </div>
          <div className="rule">
            <span className="rule-icon">🟩</span>
            <span>Share your results — fewer guesses = more impressive!</span>
          </div>
          <hr />
          <p className="disclaimer">
            <strong>Disclaimer:</strong> This game is for educational and entertainment purposes only.
            It is not a substitute for medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [view, setView] = useState('daily')
  const [archivePuzzle, setArchivePuzzle] = useState(null)
  const [showStats, setShowStats] = useState(false)
  const [showArchive, setShowArchive] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  const { puzzle: dailyPuzzle, puzzleNumber } = getDailyPuzzle()

  const handleArchiveSelect = (puzzle) => {
    setArchivePuzzle(puzzle)
    setView('archive')
    setShowArchive(false)
  }

  const currentPuzzle = view === 'daily' ? dailyPuzzle : archivePuzzle
  const currentNumber = view === 'daily' ? puzzleNumber : `archive_${archivePuzzle?.id}`

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <button className="icon-btn" onClick={() => setShowInfo(true)} title="How to Play">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          </button>
        </div>
        <div className="header-center" onClick={() => { setView('daily'); setArchivePuzzle(null) }} style={{ cursor: 'pointer' }}>
          <h1 className="title">
            <span className="title-icon">🩺</span>
            GYNordle
          </h1>
          <p className="subtitle">The OB/GYN Diagnosis Game</p>
        </div>
        <div className="header-right">
          <button className="icon-btn" onClick={() => setShowArchive(true)} title="Archive">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="4" rx="1" />
              <path d="M4 7v13a2 2 0 002 2h12a2 2 0 002-2V7M10 12h4" />
            </svg>
          </button>
          <button className="icon-btn" onClick={() => setShowStats(true)} title="Statistics">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
          </button>
        </div>
      </header>

      {view === 'daily' && (
        <div className="puzzle-label">
          <span>Daily Puzzle #{puzzleNumber}</span>
        </div>
      )}
      {view === 'archive' && archivePuzzle && (
        <div className="puzzle-label archive-label">
          <button className="back-btn" onClick={() => { setView('daily'); setArchivePuzzle(null) }}>
            ← Back to Daily
          </button>
          <span>Practice #{archivePuzzle.id}</span>
        </div>
      )}

      {currentPuzzle && (
        <Game
          key={currentNumber}
          puzzle={currentPuzzle}
          puzzleNumber={currentNumber}
          mode={view}
        />
      )}

      <footer className="footer">
        <p>For educational purposes only. Not medical advice.</p>
        <p>A new puzzle every day at midnight.</p>
      </footer>

      {showStats && <StatsModal onClose={() => setShowStats(false)} />}
      {showArchive && <ArchiveModal onClose={() => setShowArchive(false)} onSelect={handleArchiveSelect} />}
      {showInfo && <InfoModal onClose={() => setShowInfo(false)} />}
    </div>
  )
}
