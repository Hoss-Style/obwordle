const puzzles = [
  {
    id: 1,
    answer: "Ectopic Pregnancy",
    category: "Obstetrics",
    clues: [
      "A 28-year-old G2P1 woman presents to the ED with lower abdominal pain and vaginal spotting. Her last menstrual period was 7 weeks ago.",
      "She reports sharp, unilateral right-sided pelvic pain that began suddenly 2 hours ago. She has a history of pelvic inflammatory disease.",
      "Vital signs: BP 100/60, HR 110. Quantitative β-hCG is 1,500 mIU/mL. Transvaginal ultrasound shows no intrauterine pregnancy.",
      "There is a complex adnexal mass on the right side measuring 3.2 cm with a \"ring of fire\" sign on Doppler.",
      "Free fluid is noted in the cul-de-sac. The patient becomes increasingly tachycardic and diaphoretic.",
      "Culdocentesis reveals non-clotting blood. The diagnosis is confirmed and the patient is taken to the operating room for salpingectomy."
    ],
    summary: "Ectopic pregnancy occurs when a fertilized egg implants outside the uterine cavity, most commonly in the fallopian tube (~95%). Risk factors include prior PID, previous ectopic, tubal surgery, and IUD use. The classic triad is amenorrhea, vaginal bleeding, and unilateral pelvic pain. A β-hCG above the discriminatory zone (~1,500-2,000) without an IUP on TVUS is highly suspicious. Rupture can cause life-threatening hemorrhage requiring emergent surgery."
  },
  {
    id: 2,
    answer: "Placenta Previa",
    category: "Obstetrics",
    clues: [
      "A 34-year-old G4P3 woman at 32 weeks gestation presents with sudden onset painless vaginal bleeding.",
      "She has a history of three prior cesarean deliveries. She denies abdominal pain, contractions, or trauma.",
      "Vital signs are stable. The uterus is soft and non-tender on palpation. Fetal heart tracing is reassuring.",
      "The initial hemoglobin is 10.2 g/dL. A digital cervical exam has NOT been performed.",
      "Transabdominal ultrasound reveals the placental edge completely covering the internal cervical os.",
      "The patient is admitted for observation, given betamethasone for fetal lung maturity, and a cesarean delivery is planned."
    ],
    summary: "Placenta previa is the implantation of the placenta over or near the internal cervical os. It classically presents with painless, bright red vaginal bleeding in the second or third trimester. Risk factors include prior cesarean deliveries, multiparity, advanced maternal age, and prior previa. Digital cervical exam is absolutely contraindicated as it can provoke massive hemorrhage. Diagnosis is confirmed by ultrasound. Delivery is by cesarean section."
  },
  {
    id: 3,
    answer: "Preeclampsia",
    category: "Obstetrics",
    clues: [
      "A 30-year-old primigravida at 34 weeks gestation presents with a headache and swelling in her hands and face that developed over the past 3 days.",
      "Blood pressure in the office is 158/102 mmHg, confirmed on repeat measurement 4 hours later. She had normal blood pressures prior to 20 weeks.",
      "Urinalysis shows 3+ protein. She reports new-onset visual changes described as \"seeing spots.\"",
      "Labs reveal: platelets 98,000/μL, AST 152 U/L, ALT 178 U/L, creatinine 1.3 mg/dL.",
      "The protein-to-creatinine ratio is 0.42. She begins complaining of severe right upper quadrant pain.",
      "Given the severe features (thrombocytopenia, elevated transaminases, renal insufficiency, and cerebral symptoms), magnesium sulfate is initiated and delivery is planned."
    ],
    summary: "Preeclampsia is a hypertensive disorder of pregnancy defined as new-onset hypertension (≥140/90) after 20 weeks gestation with proteinuria or other end-organ dysfunction. Severe features include BP ≥160/110, thrombocytopenia (<100,000), elevated liver enzymes (≥2x normal), renal insufficiency (Cr >1.1), pulmonary edema, or cerebral/visual disturbances. HELLP syndrome (Hemolysis, Elevated Liver enzymes, Low Platelets) is a variant. Magnesium sulfate prevents seizures (eclampsia). Definitive treatment is delivery."
  },
  {
    id: 4,
    answer: "Ovarian Torsion",
    category: "Gynecology",
    clues: [
      "A 22-year-old nulligravid woman presents to the ED with acute onset of severe left-sided pelvic pain associated with nausea and vomiting.",
      "The pain woke her from sleep and is described as sharp and colicky. She is writhing on the exam table and unable to find a comfortable position.",
      "Pregnancy test is negative. WBC is mildly elevated at 12,500/μL. She has a known history of a 6 cm left ovarian dermoid cyst.",
      "On exam, there is exquisite left adnexal tenderness. Transvaginal ultrasound shows an enlarged left ovary at 8 cm with peripheral follicles (\"string of pearls\" sign).",
      "Doppler ultrasound shows absent arterial and venous flow to the left ovary.",
      "She is taken emergently to the OR for laparoscopic detorsion. The ovary is found twisted 720 degrees and reperfuses after untwisting."
    ],
    summary: "Ovarian torsion is the complete or partial rotation of the ovary on its vascular pedicle, compromising blood flow. It typically presents with sudden, severe, unilateral pelvic pain with nausea/vomiting. Risk factors include ovarian cysts or masses >5 cm (dermoid cysts are the most common associated mass), ovarian hyperstimulation, and pregnancy. Ultrasound may show an enlarged ovary with peripheral follicles and absent Doppler flow, though the presence of flow does not exclude torsion. Treatment is emergent surgical detorsion to salvage the ovary."
  },
  {
    id: 5,
    answer: "Placental Abruption",
    category: "Obstetrics",
    clues: [
      "A 29-year-old G3P2 woman at 35 weeks gestation presents after a motor vehicle accident with abdominal pain and vaginal bleeding.",
      "She reports constant, severe abdominal pain. She has a history of chronic hypertension and cocaine use.",
      "On exam, the uterus is rigid, \"board-like,\" and tender to palpation. Fetal heart rate tracing shows recurrent late decelerations.",
      "Ultrasound shows a retroplacental clot. However, the physician notes that ultrasound sensitivity for this condition is only 50-80%.",
      "Labs show fibrinogen of 150 mg/dL (low) and an elevated D-dimer, concerning for developing DIC.",
      "Emergency cesarean delivery is performed. A large retroplacental blood clot is found with a Couvelaire uterus."
    ],
    summary: "Placental abruption is the premature separation of the placenta from the uterine wall before delivery. It presents with painful vaginal bleeding (though 20% are concealed), uterine tenderness, and a rigid/hypertonic uterus. Risk factors include hypertension, trauma, cocaine use, prior abruption, and smoking. It can cause DIC due to release of thromboplastin. Fetal distress with late decelerations is common. Couvelaire uterus refers to blood infiltration into the myometrium. Severe abruption requires emergent delivery."
  },
  {
    id: 6,
    answer: "Endometriosis",
    category: "Gynecology",
    clues: [
      "A 26-year-old nulligravid woman presents with a 3-year history of progressively worsening pelvic pain, particularly during menstruation.",
      "She describes severe dysmenorrhea that begins 1-2 days before menses and persists throughout. Over-the-counter NSAIDs provide minimal relief. She also reports pain with intercourse (deep dyspareunia).",
      "She and her partner have been trying to conceive for 18 months without success. Her cycles are regular at 28 days.",
      "On bimanual exam, there is a fixed, retroverted uterus with tender nodularity along the uterosacral ligaments. The rectovaginal exam reveals a tender nodule in the posterior cul-de-sac.",
      "Transvaginal ultrasound reveals a 4 cm homogeneous hypoechoic cyst in the left ovary with low-level internal echoes and no internal vascularity — an \"endometrioma\" (chocolate cyst).",
      "Diagnostic laparoscopy reveals blue-black \"powder burn\" lesions on the peritoneum, dense adhesions in the cul-de-sac, and biopsy confirms endometrial glands and stroma outside the uterus."
    ],
    summary: "Endometriosis is the presence of endometrial glands and stroma outside the uterine cavity. It affects ~10% of reproductive-age women and is a leading cause of chronic pelvic pain and infertility. The classic triad is dysmenorrhea, dyspareunia, and dyschezia (painful defecation). Endometriomas (chocolate cysts) are ovarian cysts filled with old blood. Diagnosis is confirmed by laparoscopy with biopsy. Treatment includes NSAIDs, hormonal suppression (OCPs, GnRH agonists), and surgical excision. It is estrogen-dependent and often improves after menopause."
  },
  {
    id: 7,
    answer: "Gestational Diabetes Mellitus",
    category: "Obstetrics",
    clues: [
      "A 32-year-old G2P1 woman at 26 weeks gestation presents for routine prenatal care. Her BMI is 34 and she has a family history of type 2 diabetes.",
      "Her 1-hour glucose challenge test (50g GCT) returns at 156 mg/dL (threshold: 140 mg/dL).",
      "A 3-hour 100g oral glucose tolerance test is performed. Fasting: 98, 1-hour: 195, 2-hour: 172, 3-hour: 148 mg/dL. Two or more values exceed the Carpenter-Coustan criteria.",
      "Fundal height measurement is 30 cm, greater than expected for gestational age. Ultrasound reveals estimated fetal weight at the 93rd percentile with increased abdominal circumference.",
      "She is started on dietary modifications and blood glucose monitoring. After 2 weeks, fasting glucose remains >95 mg/dL and postprandial values are consistently >120 mg/dL at 2 hours.",
      "Insulin therapy is initiated. She is counseled about risks including macrosomia, shoulder dystocia, neonatal hypoglycemia, and future risk of type 2 diabetes."
    ],
    summary: "Gestational diabetes mellitus (GDM) is glucose intolerance first recognized during pregnancy, typically screened at 24-28 weeks. Risk factors include obesity, family history of DM, prior GDM, advanced maternal age, and certain ethnicities. Screening uses a two-step approach: 1-hour GCT followed by 3-hour OGTT if abnormal. Complications include fetal macrosomia, shoulder dystocia, neonatal hypoglycemia, and preeclampsia. Treatment begins with diet/exercise; insulin is added if glycemic targets aren't met. Metformin and glyburide are alternatives. Women with GDM have a 50% lifetime risk of developing type 2 DM."
  },
  {
    id: 8,
    answer: "Uterine Fibroids",
    category: "Gynecology",
    clues: [
      "A 38-year-old G0 African American woman presents with heavy menstrual bleeding for the past 8 months. She reports soaking through a pad every 1-2 hours during menses.",
      "She also describes pelvic pressure, urinary frequency, and a sensation of abdominal fullness. Her hemoglobin is 9.8 g/dL with a microcytic anemia.",
      "On bimanual exam, the uterus is enlarged to approximately 14-week size and has an irregular contour. It is mobile and non-tender.",
      "Transvaginal ultrasound reveals multiple well-circumscribed, hypoechoic masses within the myometrium, the largest measuring 7 cm on the posterior wall.",
      "A saline infusion sonohysterogram shows a 3 cm submucosal mass distorting the endometrial cavity, likely contributing to the menorrhagia.",
      "Given her desire for future fertility, she is offered myomectomy. GnRH agonist therapy is started preoperatively to reduce fibroid size and improve anemia."
    ],
    summary: "Uterine fibroids (leiomyomas) are the most common pelvic tumors in women, arising from smooth muscle of the myometrium. They are more prevalent in African American women. Classified by location: submucosal (most likely to cause bleeding), intramural, and subserosal. Symptoms include heavy menstrual bleeding (menorrhagia), pelvic pressure, urinary frequency, and infertility. They are estrogen and progesterone-dependent, growing during reproductive years and shrinking after menopause. Treatment ranges from medical (GnRH agonists, tranexamic acid) to surgical (myomectomy, hysterectomy) depending on symptoms and fertility goals."
  },
  {
    id: 9,
    answer: "Shoulder Dystocia",
    category: "Obstetrics",
    clues: [
      "A 31-year-old G2P1 woman with gestational diabetes and an estimated fetal weight of 4,200g is in active labor at 39 weeks gestation.",
      "After a prolonged second stage, the fetal head delivers but immediately retracts against the perineum.",
      "This retraction of the delivered head is recognized as the \"turtle sign.\" The anterior shoulder is impacted behind the pubic symphysis.",
      "The nurse applies suprapubic pressure while the obstetrician performs the McRoberts maneuver (hyperflexion of maternal thighs toward abdomen).",
      "When initial maneuvers fail, the Rubin maneuver (pressure on the posterior aspect of the anterior shoulder) and delivery of the posterior arm are attempted.",
      "The infant is delivered with an Apgar of 7 at 1 minute. The newborn is found to have a right-sided Erb palsy (C5-C6) with a \"waiter's tip\" posture."
    ],
    summary: "Shoulder dystocia occurs when the fetal anterior shoulder impacts behind the maternal pubic symphysis after delivery of the head. The \"turtle sign\" (retraction of the head against the perineum) is pathognomonic. Risk factors include macrosomia, gestational diabetes, maternal obesity, prior shoulder dystocia, and prolonged second stage. Management follows the ALARMER mnemonic: Ask for help, Legs (McRoberts), Anterior shoulder pressure (suprapubic), Rotation (Rubin/Woods), Manual delivery of posterior arm, Episiotomy, Roll to all-fours (Gaskin maneuver). Complications include brachial plexus injury (Erb palsy C5-C6), clavicle fracture, and neonatal asphyxia."
  },
  {
    id: 10,
    answer: "Polycystic Ovary Syndrome",
    category: "Gynecology",
    clues: [
      "A 24-year-old woman presents with irregular menstrual cycles occurring every 45-90 days since menarche. She has gained 30 pounds over the past 2 years.",
      "She is also concerned about progressive facial hair growth (hirsutism), persistent acne along the jawline, and thinning hair on the crown of her head.",
      "BMI is 32. Exam reveals acanthosis nigricans on the posterior neck and axillae. There is no virilization (clitoromegaly, voice deepening).",
      "Labs show: total testosterone mildly elevated, DHEA-S normal, 17-hydroxyprogesterone normal, TSH normal, prolactin normal. LH:FSH ratio is 3:1.",
      "Fasting glucose is 108 mg/dL with an elevated fasting insulin level, consistent with insulin resistance. HbA1c is 5.9%.",
      "Transvaginal ultrasound shows bilateral ovaries with ≥12 peripheral follicles each measuring 2-9 mm (\"string of pearls\" appearance), consistent with Rotterdam criteria."
    ],
    summary: "Polycystic ovary syndrome (PCOS) is the most common endocrine disorder in reproductive-age women, affecting 6-12%. Diagnosis requires 2 of 3 Rotterdam criteria: oligo/anovulation, clinical/biochemical hyperandrogenism, and polycystic ovarian morphology on ultrasound. Associated with insulin resistance, metabolic syndrome, type 2 diabetes, and endometrial hyperplasia (from unopposed estrogen). Acanthosis nigricans indicates insulin resistance. Treatment depends on goals: OCPs for cycle regulation and anti-androgen effects, metformin for insulin resistance, spironolactone for hirsutism, and clomiphene/letrozole for ovulation induction when fertility is desired."
  },
  {
    id: 11,
    answer: "Cervical Cancer",
    category: "Gynecology",
    clues: [
      "A 42-year-old woman presents with irregular vaginal bleeding, including postcoital spotting, for the past 4 months. She has not had a Pap smear in over 10 years.",
      "She also reports a malodorous, blood-tinged vaginal discharge and vague pelvic discomfort. She has a history of multiple sexual partners and began sexual activity at age 14.",
      "On speculum exam, a 3 cm friable, exophytic mass is visualized on the cervix that bleeds easily on contact.",
      "Pap smear shows high-grade squamous intraepithelial lesion (HSIL). HPV testing is positive for high-risk types 16 and 18.",
      "Colposcopy-directed biopsy reveals invasive squamous cell carcinoma. Staging workup with MRI shows a 3.5 cm mass confined to the cervix (Stage IB2).",
      "She is treated with radical hysterectomy with pelvic lymph node dissection. Pathology confirms squamous cell carcinoma with negative margins and no lymph node metastasis."
    ],
    summary: "Cervical cancer is the fourth most common cancer in women worldwide, primarily caused by persistent high-risk HPV infection (types 16 and 18 account for ~70%). Risk factors include early sexual debut, multiple sexual partners, immunosuppression, smoking, and lack of screening. The progression from HPV infection to CIN (cervical intraepithelial neoplasia) to invasive cancer takes years, making screening (Pap smear, HPV testing) highly effective. Symptoms include postcoital bleeding, irregular bleeding, and malodorous discharge. Treatment depends on stage: early stages may be treated surgically, while advanced stages require chemoradiation."
  },
  {
    id: 12,
    answer: "Eclampsia",
    category: "Obstetrics",
    clues: [
      "A 19-year-old primigravida at 37 weeks gestation is brought to the ED by her partner after a witnessed seizure at home lasting approximately 90 seconds.",
      "She had been complaining of a severe headache and visual changes (\"flashing lights\") for the past 24 hours but did not seek medical attention.",
      "On arrival, she is postictal. Blood pressure is 182/116 mmHg. She has significant facial and pedal edema. Deep tendon reflexes are 4+ with clonus.",
      "Labs reveal: proteinuria 4+, platelets 82,000/μL, LDH 850 U/L, AST 245 U/L. Peripheral blood smear shows schistocytes.",
      "IV magnesium sulfate is immediately initiated as a 4-6g loading dose followed by a 1-2g/hr maintenance infusion. Labetalol is given for blood pressure control.",
      "After stabilization, emergent cesarean delivery is performed. Magnesium is continued for 24-48 hours postpartum to prevent recurrent seizures. The diagnosis is eclampsia with concurrent HELLP syndrome."
    ],
    summary: "Eclampsia is the occurrence of new-onset generalized tonic-clonic seizures in a patient with preeclampsia, in the absence of other neurological conditions. It can occur antepartum (most common), intrapartum, or postpartum (up to 6 weeks). Warning signs include severe headache, visual disturbances (scotomata, blurred vision), and hyperreflexia with clonus. Magnesium sulfate is the first-line treatment and prophylaxis — its therapeutic range is 4-7 mEq/L. Signs of magnesium toxicity include loss of DTRs (first sign), respiratory depression, and cardiac arrest. HELLP syndrome (present here) significantly worsens maternal prognosis. Definitive treatment is delivery."
  },
  {
    id: 13,
    answer: "Endometrial Cancer",
    category: "Gynecology",
    clues: [
      "A 62-year-old postmenopausal woman presents with vaginal bleeding for the past 3 weeks. She went through menopause at age 53 and has not been on hormone replacement therapy.",
      "Her medical history includes obesity (BMI 38), type 2 diabetes mellitus, hypertension, and nulliparity. She took tamoxifen for 5 years following treatment for breast cancer.",
      "Transvaginal ultrasound reveals an endometrial thickness of 12 mm (normal postmenopausal: <4-5 mm).",
      "An endometrial biopsy is performed via pipelle aspiration and reveals complex atypical hyperplasia with areas of well-differentiated adenocarcinoma.",
      "MRI for staging shows a tumor confined to the endometrium with <50% myometrial invasion. No cervical involvement or lymphadenopathy.",
      "She undergoes total hysterectomy with bilateral salpingo-oophorectomy and sentinel lymph node biopsy. Final pathology: Grade 1 endometrioid adenocarcinoma, Stage IA."
    ],
    summary: "Endometrial cancer is the most common gynecologic malignancy in developed countries. The primary risk factor is unopposed estrogen exposure: obesity (adipose tissue aromatizes androgens to estrogen), nulliparity, early menarche, late menopause, tamoxifen use, and estrogen-only HRT. Type I (endometrioid, ~80%) is estrogen-driven with a favorable prognosis. Type II (serous, clear cell) is more aggressive. Any postmenopausal bleeding warrants evaluation — endometrial biopsy is the gold standard. Endometrial thickness >4 mm on TVUS in postmenopausal women is concerning. Treatment is primarily surgical staging with hysterectomy/BSO."
  },
  {
    id: 14,
    answer: "Chorioamnionitis",
    category: "Obstetrics",
    clues: [
      "A 25-year-old G1P0 woman at 38 weeks gestation presents in active labor. Her membranes ruptured 22 hours ago.",
      "She develops a temperature of 38.5°C (101.3°F). She had been progressing slowly with a prolonged labor course.",
      "On exam, the uterus is tender to palpation between contractions. The amniotic fluid has become cloudy and malodorous.",
      "Fetal heart rate tracing shows a baseline of 175 bpm (fetal tachycardia). Maternal heart rate is 112 bpm.",
      "Labs reveal WBC of 18,000/μL with a left shift. Blood cultures are drawn. The clinical diagnosis is made based on maternal fever plus supporting criteria.",
      "Broad-spectrum IV antibiotics (ampicillin and gentamicin) are initiated immediately. Labor is augmented with oxytocin for expedient vaginal delivery rather than delaying for cesarean."
    ],
    summary: "Chorioamnionitis (intraamniotic infection) is infection of the amniotic fluid, membranes, placenta, or a combination. The primary risk factor is prolonged rupture of membranes (>18 hours). Other risk factors include prolonged labor, multiple digital cervical exams, and GBS colonization. Diagnosis is clinical: maternal fever (≥39°C once, or 38.0-38.9°C with additional criteria) plus maternal/fetal tachycardia, uterine tenderness, or purulent amniotic fluid. The most common organisms are GBS, E. coli, and anaerobes. Treatment is immediate IV antibiotics and delivery — labor should not be delayed. Chorioamnionitis is NOT an indication for cesarean delivery."
  },
  {
    id: 15,
    answer: "Molar Pregnancy",
    category: "Obstetrics",
    clues: [
      "A 19-year-old G1P0 woman presents at 10 weeks gestation with severe nausea and vaginal bleeding. She describes passing grape-like vesicles vaginally.",
      "Her uterus measures larger than expected for gestational age — fundal height corresponds to approximately 16 weeks.",
      "Blood pressure is 148/96 mmHg. β-hCG level is markedly elevated at 285,000 mIU/mL, much higher than expected for gestational age.",
      "She has bilateral theca lutein cysts on ultrasound (8 cm and 6 cm), which develop from ovarian hyperstimulation by extremely high β-hCG levels.",
      "Pelvic ultrasound reveals a classic \"snowstorm\" pattern — a heterogeneous intrauterine mass with numerous small cystic spaces and no identifiable fetus.",
      "Suction curettage is performed. Pathology shows hydropic chorionic villi with trophoblastic proliferation and no fetal tissue, consistent with a complete hydatidiform mole (46,XX — entirely paternal in origin). Serial β-hCG monitoring is initiated to surveil for gestational trophoblastic neoplasia."
    ],
    summary: "A molar pregnancy (hydatidiform mole) is a form of gestational trophoblastic disease. Complete moles (46,XX, entirely paternal) have no fetal tissue and present with a snowstorm ultrasound pattern, markedly elevated β-hCG, size-dates discrepancy, and theca lutein cysts. Partial moles (69,XXY, triploid) may have fetal parts. Classic presentation includes vaginal bleeding with passage of grape-like vesicles, hyperemesis, and early preeclampsia (<20 weeks — one of the few causes). Treatment is uterine evacuation by suction curettage. Serial β-hCG monitoring is mandatory for 6-12 months to detect malignant transformation (gestational trophoblastic neoplasia occurs in ~15-20% of complete moles)."
  },
  {
    id: 16,
    answer: "Pelvic Organ Prolapse",
    category: "Gynecology",
    clues: [
      "A 65-year-old G5P5 postmenopausal woman presents with a sensation of vaginal pressure and a \"bulge\" she can feel at the vaginal opening, worsening throughout the day.",
      "She reports difficulty emptying her bladder completely and occasional urinary incontinence with coughing or sneezing. She must sometimes manually reduce the bulge to urinate.",
      "Her obstetric history includes five vaginal deliveries, the largest infant weighing 9 lbs 4 oz. She has a chronic cough from COPD and has been postmenopausal for 14 years without estrogen therapy.",
      "On exam in the lithotomy position with Valsalva, the cervix descends to 2 cm beyond the hymenal ring. There is also a posterior vaginal wall bulge (rectocele) with loss of rugae.",
      "POP-Q staging reveals Stage III uterovaginal prolapse. Postvoid residual is 120 mL. Urodynamic studies show stress urinary incontinence.",
      "After discussing options, she elects for vaginal hysterectomy with uterosacral ligament suspension and posterior colporrhaphy. A pessary was offered as a non-surgical alternative."
    ],
    summary: "Pelvic organ prolapse (POP) is the descent of pelvic structures (uterus, bladder, rectum) due to weakening of the pelvic floor support. Types include cystocele (anterior wall/bladder), rectocele (posterior wall/rectum), uterine prolapse, and enterocele (small bowel). Risk factors include vaginal delivery (especially macrosomic infants), multiparity, menopause/estrogen deficiency, chronic straining, obesity, and connective tissue disorders. Quantified using the POP-Q system (Stages 0-IV). Treatment ranges from conservative (pelvic floor exercises, pessary, topical estrogen) to surgical (colporrhaphy, sacrocolpopexy, hysterectomy with vault suspension)."
  },
  {
    id: 17,
    answer: "Postpartum Hemorrhage",
    category: "Obstetrics",
    clues: [
      "A 28-year-old G3P3 woman just delivered a 4,100g infant vaginally after an oxytocin-augmented labor lasting 18 hours. Estimated blood loss is rapidly increasing.",
      "Within 30 minutes of placental delivery, she has lost approximately 1,200 mL of blood. She is tachycardic at 118 bpm and her blood pressure has dropped to 90/58 mmHg.",
      "The placenta was delivered intact. Inspection of the cervix and vaginal canal shows no significant lacerations.",
      "On bimanual exam, the uterus is soft, boggy, and poorly contracted — it extends above the umbilicus. Fundal massage is initiated.",
      "The Four T's mnemonic is considered: Tone (most common — atony), Trauma, Tissue (retained), and Thrombin. The soft, boggy uterus confirms the etiology.",
      "IV oxytocin infusion is increased, IM methylergonovine and IM carboprost (15-methyl PGF2α) are administered. A Bakri balloon is placed for uterine tamponade. Bleeding is controlled."
    ],
    summary: "Postpartum hemorrhage (PPH) is blood loss ≥1,000 mL or bleeding with hemodynamic instability after delivery. It is the leading cause of maternal mortality worldwide. The most common cause (~70-80%) is uterine atony — failure of the uterus to contract after delivery. Risk factors for atony include overdistended uterus (macrosomia, polyhydramnios, multiples), prolonged labor, chorioamnionitis, and uterine relaxants. The \"Four T's\" mnemonic covers causes: Tone (atony), Trauma (lacerations), Tissue (retained placenta), Thrombin (coagulopathy). Treatment escalates from uterotonics (oxytocin, methylergonovine, carboprost, misoprostol) to tamponade (Bakri balloon), compression sutures (B-Lynch), uterine artery ligation/embolization, and ultimately hysterectomy."
  },
  {
    id: 18,
    answer: "Ovarian Cancer",
    category: "Gynecology",
    clues: [
      "A 58-year-old postmenopausal woman presents with a 3-month history of bloating, early satiety, and a 10-pound unintentional weight loss despite increasing abdominal girth.",
      "She also reports urinary frequency and vague pelvic pain. She has a strong family history: her mother died of ovarian cancer at 56 and her sister had breast cancer at 44.",
      "On exam, there is a firm, fixed, irregular pelvic mass palpable on bimanual exam. Shifting dullness is present on abdominal exam, indicating ascites.",
      "CA-125 level is elevated at 485 U/mL (normal <35). CT abdomen/pelvis shows a 10 cm complex adnexal mass with solid and cystic components, ascites, and omental caking.",
      "Genetic testing reveals a pathogenic BRCA1 mutation, which confers a 39-46% lifetime risk of ovarian cancer.",
      "She undergoes primary cytoreductive surgery (debulking) with total hysterectomy, BSO, omentectomy, and lymph node sampling, followed by platinum-based chemotherapy (carboplatin/paclitaxel). She is also offered a PARP inhibitor (olaparib) given her BRCA status."
    ],
    summary: "Ovarian cancer is the deadliest gynecologic malignancy due to late presentation — over 70% are diagnosed at Stage III/IV. High-grade serous carcinoma is the most common type. Symptoms are vague: bloating, early satiety, pelvic/abdominal pain, and urinary frequency. Risk factors include BRCA1/2 mutations, family history, nulliparity, and endometriosis. Protective factors include OCPs, breastfeeding, and tubal ligation. CA-125 is elevated in ~80% of advanced cases but is not a reliable screening test. Treatment is surgical debulking followed by platinum/taxane chemotherapy. BRCA-mutated cancers respond well to PARP inhibitors. BRCA carriers should be offered risk-reducing salpingo-oophorectomy after completing childbearing."
  },
  {
    id: 19,
    answer: "Preterm Premature Rupture of Membranes",
    category: "Obstetrics",
    clues: [
      "A 27-year-old G2P1 woman at 30 weeks gestation presents with a sudden gush of clear fluid from the vagina 3 hours ago. She denies contractions, fever, or vaginal bleeding.",
      "She has a history of PPROM in her prior pregnancy at 32 weeks. She is a current smoker and was treated for bacterial vaginosis earlier in this pregnancy.",
      "On sterile speculum exam, there is pooling of clear fluid in the posterior vaginal fornix. Nitrazine paper turns dark blue (alkaline). Ferning pattern is observed on a dried sample under microscopy.",
      "Digital cervical exam is avoided. The cervix appears 1 cm dilated visually. GBS culture was positive at a prior visit.",
      "Fetal heart tracing is reassuring. She is afebrile. WBC is 10,200/μL. An ultrasound shows oligohydramnios with an AFI of 3.8 cm.",
      "She receives betamethasone for fetal lung maturity, latency antibiotics (ampicillin and azithromycin), GBS prophylaxis with penicillin, and magnesium sulfate for neuroprotection. Expectant management with close monitoring is planned until 34 weeks."
    ],
    summary: "Preterm premature rupture of membranes (PPROM) is rupture of fetal membranes before 37 weeks and before the onset of labor. Risk factors include prior PPROM, smoking, infections (BV, STIs), short cervix, and polyhydramnios. Diagnosis is clinical: pooling, positive nitrazine test (amniotic fluid is alkaline, pH 7.1-7.3), and ferning. Digital exam increases infection risk and should be avoided. Management at 24-33+6 weeks: expectant management with latency antibiotics, antenatal corticosteroids, GBS prophylaxis if positive, and magnesium sulfate for neuroprotection (<32 weeks). Delivery is indicated at 34 weeks, or earlier for infection, abruption, non-reassuring fetal status, or cord prolapse."
  },
  {
    id: 20,
    answer: "Ectopic Pregnancy (Cervical)",
    category: "Obstetrics",
    clues: [
      "A 33-year-old G3P0 woman with a history of two prior dilation and curettages presents with painless vaginal bleeding at 7 weeks gestation.",
      "β-hCG is 12,500 mIU/mL. Transvaginal ultrasound shows no intrauterine pregnancy, but the uterine cavity is empty with a normal-appearing endometrium.",
      "A gestational sac with a yolk sac is visualized within the cervical canal, below the level of the internal os. The cervix has an \"hourglass\" or barrel-shaped appearance.",
      "Color Doppler demonstrates peritrophoblastic flow around the gestational sac within the cervix. There is no sliding sign with gentle probe pressure (the sac does not move — it is implanted).",
      "The patient is hemodynamically stable. Given the desire for future fertility and hemodynamic stability, the team elects for medical management.",
      "She is treated with systemic methotrexate (multi-dose protocol) along with consideration of local injection. Serial β-hCG monitoring shows declining levels. She is counseled that cervical ectopics carry a high risk of hemorrhage and that uterine artery embolization or even hysterectomy may be needed if bleeding occurs."
    ],
    summary: "Cervical ectopic pregnancy is a rare (<1% of ectopics) but dangerous form where the embryo implants in the cervical canal. Risk factors include prior uterine instrumentation (D&C), IVF, and prior cesarean section. It presents with painless vaginal bleeding. Ultrasound shows a gestational sac within the cervix below the internal os, barrel-shaped cervix, and absent sliding sign (distinguishing from an inevitable miscarriage). Treatment options include systemic methotrexate, local methotrexate injection, uterine artery embolization, cervical cerclage to tamponade bleeding, and hysterectomy if hemorrhage is uncontrollable. Early diagnosis is critical as cervical ectopics can cause life-threatening hemorrhage due to the rich cervical blood supply."
  },
  {
    id: 21,
    answer: "Gestational Trophoblastic Neoplasia",
    category: "Gynecology/Oncology",
    clues: [
      "A 24-year-old woman presents 8 weeks after uterine evacuation of a complete hydatidiform mole. Her β-hCG levels were declining but have now risen on two consecutive weekly measurements.",
      "Current β-hCG is 18,500 mIU/mL, up from 8,200 mIU/mL one week ago and 5,100 mIU/mL two weeks ago — a rising plateau.",
      "She reports intermittent vaginal bleeding. Pelvic ultrasound shows a 2.5 cm vascular mass within the myometrium with prominent Doppler flow.",
      "Chest X-ray reveals three small bilateral pulmonary nodules. CT confirms lung metastases. No other sites of metastatic disease are identified.",
      "Her WHO prognostic score is calculated at 5, classifying her as low-risk gestational trophoblastic neoplasia.",
      "She is started on single-agent methotrexate chemotherapy with leucovorin rescue. β-hCG is monitored weekly and must normalize then be followed for 12 months. She is advised to use reliable contraception throughout treatment and surveillance."
    ],
    summary: "Gestational trophoblastic neoplasia (GTN) includes invasive mole, choriocarcinoma, placental site trophoblastic tumor, and epithelioid trophoblastic tumor. GTN most commonly follows a complete hydatidiform mole (~15-20%) but can follow any pregnancy. Diagnosis is based on β-hCG criteria: rising levels (≥10% rise over 3 values/2 weeks), plateau (<10% change over 4 values/3 weeks), or persistently elevated β-hCG ≥6 months post-evacuation. The WHO scoring system stratifies risk. Low-risk disease (score ≤6) is treated with single-agent chemotherapy (methotrexate or actinomycin-D) with near 100% cure rate. High-risk disease (score ≥7) requires multi-agent chemotherapy (EMA-CO). GTN is one of the most curable human malignancies."
  },
  {
    id: 22,
    answer: "Umbilical Cord Prolapse",
    category: "Obstetrics",
    clues: [
      "A 30-year-old G3P2 woman at 37 weeks gestation with a known fetal breech presentation has spontaneous rupture of membranes while being evaluated for contractions.",
      "Immediately following the gush of fluid, the fetal heart rate monitor shows sudden, severe bradycardia to 70 bpm with prolonged decelerations.",
      "On sterile vaginal exam, a pulsating loop of tissue is palpated in the vaginal canal ahead of the presenting part.",
      "The examiner immediately elevates the presenting part off the cord with their hand and does not remove their hand. The patient is placed in Trendelenburg (head-down) or knee-chest position.",
      "The bladder is filled with 500-700 mL of saline via Foley catheter to further elevate the presenting part off the cord.",
      "An emergent cesarean delivery is performed with the examiner's hand maintaining elevation of the presenting part throughout. A viable infant is delivered with Apgar scores of 6 and 8."
    ],
    summary: "Umbilical cord prolapse is the descent of the umbilical cord through the cervix alongside (occult) or past (overt) the presenting part after rupture of membranes. It causes cord compression leading to fetal bradycardia and potential death if not emergently managed. Risk factors include malpresentation (breech, transverse lie), polyhydramnios, prematurity, multiparity, and amniotomy with a high presenting part. Immediate management: manually elevate the presenting part off the cord (do NOT attempt to replace the cord), position in Trendelenburg/knee-chest, fill the bladder to elevate the presenting part, and proceed to emergent cesarean delivery. The examiner should not remove their hand until delivery."
  },
  {
    id: 23,
    answer: "Vulvar Cancer",
    category: "Gynecology/Oncology",
    clues: [
      "A 72-year-old woman presents with a persistent pruritic vulvar lesion that has been present for over a year. She has tried multiple topical antifungals without improvement.",
      "She also notes occasional bleeding from the lesion and pain with sitting. She has a long history of lichen sclerosus of the vulva diagnosed 15 years ago.",
      "On exam, there is a 2.5 cm raised, ulcerated, firm lesion on the left labium majus with irregular borders. Bilateral inguinofemoral lymph nodes are not palpable.",
      "A punch biopsy of the lesion reveals invasive squamous cell carcinoma with a depth of invasion of 3 mm.",
      "Staging workup with CT shows no distant metastasis. The lesion is classified as Stage IB (confined to the vulva, >2 cm with stromal invasion >1 mm).",
      "She undergoes radical local excision with bilateral inguinofemoral sentinel lymph node biopsy. Pathology shows negative margins and no nodal metastasis."
    ],
    summary: "Vulvar cancer accounts for ~6% of gynecologic malignancies, predominantly squamous cell carcinoma (>90%). Two pathways: HPV-related (younger women, VIN/usual type) and HPV-independent (older women, often with lichen sclerosus or differentiated VIN). Lichen sclerosus carries a 4-5% lifetime risk of vulvar SCC. Symptoms include vulvar pruritus, a palpable mass, bleeding, and pain. Any persistent vulvar lesion unresponsive to treatment should be biopsied. Treatment is primarily surgical: wide local excision or radical vulvectomy with inguinofemoral lymph node assessment (sentinel node biopsy for lesions with >1 mm invasion). Adjuvant radiation is indicated for close/positive margins or nodal metastasis."
  },
  {
    id: 24,
    answer: "Vasa Previa",
    category: "Obstetrics",
    clues: [
      "A 31-year-old G2P1 woman at 36 weeks gestation presents with sudden painless vaginal bleeding immediately following spontaneous rupture of membranes.",
      "The bleeding is relatively modest in volume, but fetal heart rate monitoring shows a sinusoidal pattern followed by severe bradycardia.",
      "Her first-trimester ultrasound had noted a low-lying placenta and a velamentous cord insertion — the umbilical vessels were inserting into the membranes rather than the placental disc.",
      "The rapid clinical deterioration of the fetal heart rate tracing in the setting of vaginal bleeding with ROM is highly suspicious for this diagnosis.",
      "An Apt test (alkali denaturation test) on the vaginal blood is performed and confirms the presence of fetal hemoglobin — the blood is of fetal origin.",
      "Emergent cesarean delivery is performed. Fetal vessels are noted running across the internal cervical os. The ruptured vessel in the membranes is visualized. The neonate requires resuscitation and blood transfusion."
    ],
    summary: "Vasa previa occurs when fetal blood vessels run through the membranes over or near the internal cervical os, unprotected by the placenta or umbilical cord. Types: Type 1 (velamentous cord insertion with vessels over the os) and Type 2 (vessels connecting succenturiate/accessory placental lobes over the os). When membranes rupture, fetal vessels can tear, causing fetal hemorrhage — the blood loss is fetal, not maternal, making even small volumes life-threatening (fetal blood volume at term is ~250 mL). Classic presentation: painless vaginal bleeding with ROM + sinusoidal fetal heart pattern. Apt test distinguishes fetal from maternal blood. Prenatal diagnosis (by TVUS with color Doppler) allows planned cesarean at 34-37 weeks, achieving >95% survival vs. ~50% if diagnosed at rupture."
  },
  {
    id: 25,
    answer: "Pelvic Inflammatory Disease",
    category: "Gynecology",
    clues: [
      "A 21-year-old sexually active woman presents with bilateral lower abdominal pain for the past 5 days, worsening with movement. She also has an abnormal purulent vaginal discharge.",
      "She reports a new sexual partner in the past month and inconsistent condom use. Her last menstrual period was 10 days ago. Urine pregnancy test is negative.",
      "On exam, she is febrile at 38.4°C. There is bilateral adnexal tenderness and cervical motion tenderness (chandelier sign) on bimanual exam.",
      "Cervical NAAT testing returns positive for Chlamydia trachomatis. WBC is 14,200/μL. ESR and CRP are elevated.",
      "Pelvic ultrasound shows bilateral thickened, fluid-filled fallopian tubes with the \"cogwheel sign\" — consistent with pyosalpinx.",
      "She is admitted for IV antibiotics (cefoxitin + doxycycline). She is counseled about the risk of tubal factor infertility, chronic pelvic pain, and ectopic pregnancy with recurrent PID."
    ],
    summary: "Pelvic inflammatory disease (PID) is an ascending infection of the upper genital tract (uterus, fallopian tubes, ovaries, peritoneum). Most commonly caused by N. gonorrhoeae and C. trachomatis, though it is often polymicrobial. Risk factors include young age, multiple sexual partners, prior STIs, and lack of barrier contraception. Minimum diagnostic criteria per CDC: cervical motion tenderness, uterine tenderness, or adnexal tenderness. Additional criteria include fever, elevated inflammatory markers, and purulent cervical discharge. Complications include tubal factor infertility (~10% per episode), ectopic pregnancy, tubo-ovarian abscess, and Fitz-Hugh-Curtis syndrome (perihepatitis). Outpatient treatment: IM ceftriaxone + PO doxycycline ± metronidazole. Inpatient: IV cefoxitin/cefotetan + doxycycline."
  },
  {
    id: 26,
    answer: "Amniotic Fluid Embolism",
    category: "Obstetrics",
    clues: [
      "A 35-year-old G4P3 woman undergoes an uncomplicated cesarean delivery at 39 weeks. Shortly after delivery of the placenta, she suddenly becomes acutely dyspneic and hypotensive.",
      "Within minutes, she develops cardiovascular collapse with blood pressure dropping to 60/30 mmHg. She becomes cyanotic and her oxygen saturation drops to 78% despite supplemental oxygen.",
      "She then develops altered mental status and generalized tonic-clonic seizures. The anesthesiologist intubates her emergently.",
      "After initial cardiopulmonary resuscitation, she begins to bleed profusely from her incision site, IV sites, and the uterus. Lab values reveal DIC: fibrinogen <100, platelets 45,000, and markedly elevated D-dimer.",
      "The classic triad of sudden cardiovascular collapse, respiratory failure, and DIC during labor/delivery or in the immediate postpartum period is recognized.",
      "This is a clinical diagnosis of exclusion. Treatment is supportive: aggressive hemodynamic resuscitation, vasopressors, blood product replacement (including cryoprecipitate for fibrinogen), and possible hysterectomy for uncontrolled uterine hemorrhage. Mortality remains 20-60%."
    ],
    summary: "Amniotic fluid embolism (AFE) is a rare (~1 in 40,000 deliveries), catastrophic, and unpredictable obstetric emergency. It occurs when amniotic fluid enters the maternal circulation, triggering an anaphylactoid reaction. The classic triad is: (1) sudden cardiovascular collapse/hypotension, (2) respiratory failure/hypoxia, and (3) DIC with hemorrhage. It typically occurs during labor, cesarean delivery, or immediately postpartum. Risk factors (though prediction is unreliable) include advanced maternal age, multiparity, operative delivery, and placenta previa/abruption. It is a diagnosis of exclusion — no confirmatory test exists. Treatment is entirely supportive (resuscitation, vasopressors, blood products, ventilatory support). Despite advances, mortality remains 20-60% and neurological outcomes among survivors are often poor."
  },
  {
    id: 27,
    answer: "Lichen Sclerosus",
    category: "Gynecology",
    clues: [
      "A 58-year-old postmenopausal woman presents with severe vulvar itching that has been progressive over the past year, worse at night.",
      "She reports pain with intercourse (introital dyspareunia) and has noticed that the skin around her vulva appears white and thin. She has also experienced occasional skin tearing with minor trauma.",
      "On exam, there are white, atrophic, parchment-like plaques involving the labia minora, clitoral hood, and perianal area in a classic \"figure-of-eight\" distribution.",
      "The labia minora appear partially resorbed (agglutinated) and the clitoral hood is fused, burying the clitoris (phimosis). There are areas of ecchymosis and fissuring.",
      "A punch biopsy shows thinned epidermis, loss of rete ridges, homogenized collagen in the upper dermis, and a band-like lymphocytic infiltrate beneath the homogenized zone.",
      "She is started on ultra-potent topical corticosteroid (clobetasol propionate 0.05%) with a tapering regimen. She is counseled about the 4-5% lifetime risk of vulvar squamous cell carcinoma and the need for long-term surveillance."
    ],
    summary: "Lichen sclerosus is a chronic inflammatory dermatosis most commonly affecting the anogenital region of postmenopausal women, though it can occur at any age. It presents with intense pruritus, white atrophic plaques in a \"figure-of-eight\" pattern around the vulva and anus, labial agglutination, clitoral phimosis, and skin fragility. The etiology is likely autoimmune. Histology shows epidermal thinning, loss of rete ridges, dermal homogenization, and a lymphocytic band. First-line treatment is ultra-potent topical corticosteroids (clobetasol). It carries a 4-5% lifetime risk of progression to vulvar squamous cell carcinoma, necessitating lifelong follow-up and biopsy of any suspicious changes. It is NOT the same as lichen planus or lichen simplex chronicus."
  },
  {
    id: 28,
    answer: "Uterine Rupture",
    category: "Obstetrics",
    clues: [
      "A 32-year-old G3P2 woman with two prior cesarean deliveries (low transverse incisions) is attempting a trial of labor after cesarean (TOLAC) at 39 weeks gestation.",
      "During active labor with oxytocin augmentation, she suddenly reports severe, sharp abdominal pain that persists between contractions — different from her prior contraction pain.",
      "The fetal heart rate tracing shows sudden, prolonged bradycardia to 60 bpm. The previously regular contraction pattern has ceased on the tocometer.",
      "On exam, the presenting part that was previously at +1 station has receded and is no longer palpable on vaginal exam (loss of station). Fetal parts are easily palpable through the abdominal wall.",
      "She develops vaginal bleeding and signs of hypovolemic shock: tachycardia 130 bpm, blood pressure 80/50 mmHg, and altered mental status.",
      "Emergent laparotomy reveals complete disruption of the prior uterine scar with extrusion of the fetus and placenta into the peritoneal cavity. Hysterectomy is performed due to the extent of the defect."
    ],
    summary: "Uterine rupture is a catastrophic full-thickness disruption of the uterine wall. The most common risk factor is prior cesarean delivery — the risk for TOLAC with one prior low transverse scar is ~0.5-1%, but increases with two prior cesareans, prior classical incision, and oxytocin/prostaglandin use. Warning signs include sudden severe abdominal pain between contractions, fetal bradycardia (most reliable sign), loss of fetal station, cessation of contractions, vaginal bleeding, and maternal hemodynamic instability. The loss of fetal station and easy palpation of fetal parts indicate the fetus has extruded through the defect. Emergent laparotomy is required. Repair may be possible for small defects, but hysterectomy is often necessary for extensive rupture."
  },
  {
    id: 29,
    answer: "Hyperemesis Gravidarum",
    category: "Obstetrics",
    clues: [
      "A 26-year-old G1P0 woman at 9 weeks gestation presents with intractable nausea and vomiting for the past 3 weeks. She is unable to tolerate any oral intake.",
      "She reports vomiting 8-10 times per day and has lost 12 pounds (8% of her pre-pregnancy weight). She has not urinated in the past 10 hours.",
      "On exam, she appears dehydrated with dry mucous membranes, poor skin turgor, and orthostatic hypotension. She has ptyalism (excessive salivation).",
      "Labs reveal: BUN/Cr elevated, hypokalemia (K+ 2.9), hypochloremic metabolic alkalosis, ketonuria 3+ on urinalysis, and elevated specific gravity of 1.035.",
      "TSH is suppressed at 0.08 mIU/L with mildly elevated free T4 — consistent with gestational thyrotoxicosis from cross-reactivity of β-hCG with the TSH receptor. Liver enzymes are mildly elevated.",
      "She is admitted for IV fluid resuscitation with dextrose and thiamine supplementation (to prevent Wernicke encephalopathy), IV ondansetron, electrolyte repletion, and nutritional support."
    ],
    summary: "Hyperemesis gravidarum (HG) is severe, persistent nausea and vomiting in pregnancy leading to >5% weight loss, dehydration, electrolyte imbalances, and ketonuria. It affects ~0.3-3% of pregnancies and peaks at 8-12 weeks. Distinguished from normal morning sickness by its severity and metabolic consequences. Classic lab findings: hypochloremic hypokalemic metabolic alkalosis (from vomiting), ketonuria, and elevated BUN/Cr from dehydration. Gestational thyrotoxicosis occurs in ~60% due to structural similarity between β-hCG and TSH — it does NOT require antithyroid treatment. Thiamine (B1) must be given before dextrose to prevent Wernicke encephalopathy. Risk factors include molar pregnancy (extremely high β-hCG), multiple gestation, prior HG, and female fetus."
  },
  {
    id: 30,
    answer: "Tubo-Ovarian Abscess",
    category: "Gynecology",
    clues: [
      "A 23-year-old woman presents with 7 days of worsening bilateral pelvic pain, fever to 39.2°C, and chills. She was treated for PID as an outpatient 2 weeks ago but admits to not completing her antibiotics.",
      "She appears acutely ill. Abdomen is distended with guarding in the lower quadrants. She has tachycardia and leukocytosis to 19,000/μL with bandemia.",
      "On bimanual exam, there is a fluctuant, exquisitely tender mass palpable in the right adnexa. Cervical motion tenderness is present.",
      "Transvaginal ultrasound reveals a 7 cm complex, multiloculated, thick-walled mass in the right adnexa with internal debris and surrounding free fluid.",
      "CT pelvis with contrast confirms the abscess and shows enhancement of the abscess wall. There is no evidence of rupture, but there is inflammatory stranding.",
      "She is admitted for IV broad-spectrum antibiotics (clindamycin + gentamicin or a carbapenem). If she fails to improve within 48-72 hours, interventional radiology-guided percutaneous drainage or surgical drainage will be considered."
    ],
    summary: "Tubo-ovarian abscess (TOA) is a late complication of PID, forming an inflammatory mass involving the fallopian tube, ovary, and sometimes adjacent structures. It typically occurs when PID is inadequately treated. Common organisms include polymicrobial anaerobes, N. gonorrhoeae, C. trachomatis, and enteric gram-negatives. Clinical features: fever, pelvic pain, palpable adnexal mass, and elevated inflammatory markers. Imaging (TVUS or CT) shows a complex, thick-walled, multiloculated mass with internal debris. Treatment: IV broad-spectrum antibiotics covering anaerobes. If no improvement in 48-72 hours, drainage (percutaneous or surgical) is indicated. Rupture is a surgical emergency — it can cause peritonitis, sepsis, and death. Long-term sequelae include infertility and chronic pain."
  },
  {
    id: 31,
    answer: "Abruptio Placentae (Concealed)",
    category: "Obstetrics",
    clues: [
      "A 33-year-old G2P1 woman at 34 weeks gestation with chronic hypertension presents with sudden-onset severe abdominal pain. She denies any vaginal bleeding.",
      "She reports the pain as constant and intense, unlike her prior Braxton-Hicks contractions. She last used cocaine 6 hours ago.",
      "On exam, the uterus is hypertonic with high-frequency, low-amplitude contractions. Fundal height is 38 cm — significantly more than expected for 34 weeks.",
      "Fetal heart rate tracing shows absent variability with recurrent late decelerations. The fetal heart rate baseline has risen to 180 bpm.",
      "Labs show: hemoglobin 8.2 g/dL (was 11.5 last visit), platelets 92,000, fibrinogen 140 mg/dL, INR 1.6. Ultrasound shows a retroplacental hypoechoic collection but is noted to be unreliable.",
      "The diagnosis of concealed (no visible vaginal bleeding) placental abruption with DIC is made. Emergent cesarean delivery is performed with massive transfusion protocol."
    ],
    summary: "Concealed placental abruption occurs when blood collects behind the placenta without visible vaginal bleeding (~20% of abruptions). This is particularly dangerous because the degree of hemorrhage is clinically underestimated. The expanding retroplacental hematoma causes increasing fundal height (size-dates discrepancy), uterine hypertonicity, and fetal distress. Risk factors include hypertension (most significant), cocaine use, trauma, prior abruption, and smoking. Concealed abruption is more likely to develop DIC than revealed abruption because the trapped blood activates the coagulation cascade. Ultrasound sensitivity is only 50-80% for abruption — a negative ultrasound does NOT rule it out. The combination of sudden abdominal pain, uterine rigidity, fetal distress, and no visible bleeding should strongly raise suspicion."
  },
  {
    id: 32,
    answer: "Group B Streptococcus Sepsis (Neonatal)",
    category: "Obstetrics/Neonatology",
    clues: [
      "A 28-year-old G2P1 woman at 38 weeks delivers vaginally after 20 hours of labor. Her rectovaginal GBS culture at 36 weeks was positive, but she arrived at the hospital in advanced labor and received only one dose of penicillin less than 4 hours before delivery.",
      "The infant appears well initially with Apgar scores of 8 and 9. The birth weight is 3,200g.",
      "At 8 hours of life, the neonate develops temperature instability (hypothermia to 36.0°C), poor feeding, and tachypnea with grunting respirations.",
      "The infant's WBC is 3,200/μL with an elevated I:T ratio (immature to total neutrophil ratio >0.2). CRP is elevated. Blood cultures are drawn.",
      "Chest X-ray shows bilateral diffuse ground-glass opacities indistinguishable from respiratory distress syndrome. Lumbar puncture reveals cloudy CSF with elevated WBC.",
      "Blood and CSF cultures grow Group B Streptococcus (Streptococcus agalactiae). The infant is treated with IV ampicillin and gentamicin. This is classified as early-onset GBS disease (<7 days of life)."
    ],
    summary: "Group B Streptococcus (GBS, Streptococcus agalactiae) is the leading cause of early-onset neonatal sepsis. Approximately 10-30% of pregnant women are colonized rectovaginally. Universal screening is recommended at 36-37 weeks. Intrapartum antibiotic prophylaxis (IAP) with IV penicillin or ampicillin is given to GBS-positive women, ideally ≥4 hours before delivery. Adequate IAP reduces early-onset GBS disease by ~80%. Early-onset disease (<7 days) presents as sepsis, pneumonia, or meningitis, typically within 12-24 hours of birth. Risk factors include preterm delivery, prolonged ROM >18 hours, intrapartum fever, GBS bacteriuria, and prior affected infant. Late-onset disease (7-89 days) presents primarily as bacteremia or meningitis and is not preventable by IAP."
  },
  {
    id: 33,
    answer: "Asherman Syndrome",
    category: "Gynecology",
    clues: [
      "A 30-year-old G2P1 woman presents with secondary amenorrhea for 6 months. She had a dilation and curettage performed for a missed abortion 8 months ago.",
      "She reports monthly cyclic pelvic pain around the expected time of her period, but no menstrual bleeding. She and her partner have been trying to conceive without success.",
      "Hormonal workup is normal: FSH, LH, estradiol, prolactin, and TSH are all within normal limits. A progesterone withdrawal test (medroxyprogesterone for 10 days) fails to produce a withdrawal bleed.",
      "An estrogen-progesterone challenge test also fails to produce bleeding, suggesting the endometrium is not responsive or the outflow tract is obstructed.",
      "Hysterosalpingogram shows multiple irregular filling defects within the uterine cavity with a significantly reduced cavity volume.",
      "Hysteroscopy reveals dense intrauterine adhesions (synechiae) obliterating most of the endometrial cavity. Hysteroscopic adhesiolysis is performed with placement of an intrauterine balloon stent and postoperative estrogen therapy to promote endometrial regeneration."
    ],
    summary: "Asherman syndrome (intrauterine adhesions/synechiae) is the formation of scar tissue within the uterine cavity, most commonly following uterine instrumentation — particularly postpartum or post-abortion D&C (90% of cases). It presents with menstrual abnormalities (hypomenorrhea, amenorrhea), cyclic pelvic pain (if outflow is obstructed), recurrent pregnancy loss, and infertility. Evaluation: normal hormonal workup + failed progesterone withdrawal challenge suggests an anatomic cause. HSG shows filling defects, but hysteroscopy is the gold standard for diagnosis and treatment. Treatment is hysteroscopic adhesiolysis followed by measures to prevent re-formation: intrauterine balloon stent, estrogen therapy, and sometimes repeat hysteroscopy. Fertility outcomes depend on the severity of adhesions."
  },
  {
    id: 34,
    answer: "Peripartum Cardiomyopathy",
    category: "Obstetrics",
    clues: [
      "A 34-year-old G4P3 African American woman presents 3 weeks postpartum with progressive dyspnea on exertion, orthopnea, and lower extremity edema.",
      "She assumed her symptoms were normal postpartum fatigue, but now she is breathless at rest and unable to lie flat. She has a history of preeclampsia in this pregnancy and twins in a prior pregnancy.",
      "On exam: JVP elevated, bilateral crackles to the mid-lung fields, S3 gallop, and 3+ pitting pedal edema. Chest X-ray shows cardiomegaly with pulmonary vascular congestion and bilateral pleural effusions.",
      "BNP is markedly elevated at 1,850 pg/mL. ECG shows sinus tachycardia with non-specific ST-T wave changes.",
      "Echocardiogram reveals a dilated left ventricle with an ejection fraction of 25% (normal >55%) and global hypokinesis. No valvular disease or prior structural heart abnormality is identified.",
      "She is diagnosed with peripartum cardiomyopathy and started on guideline-directed heart failure therapy: ACE inhibitor (safe postpartum/non-breastfeeding), beta-blocker, diuretics, and anticoagulation given the severely reduced EF. She is counseled that subsequent pregnancies carry significant risk of relapse."
    ],
    summary: "Peripartum cardiomyopathy (PPCM) is a dilated cardiomyopathy presenting with heart failure in the last month of pregnancy or within 5 months postpartum, in the absence of prior heart disease. It is characterized by EF <45%. Risk factors include African American race, multiparity, multiple gestation, advanced maternal age, preeclampsia, and gestational hypertension. Presentation mimics normal pregnancy symptoms initially (dyspnea, edema), often delaying diagnosis. Treatment follows standard heart failure guidelines with modifications: ACE inhibitors and ARBs are contraindicated in pregnancy but safe postpartum; hydralazine/nitrates are used antepartum. About 50% of women recover normal LV function. Future pregnancy is discouraged if EF does not fully recover due to high recurrence risk and mortality. Bromocriptine has emerging evidence as an adjunctive therapy."
  },
  {
    id: 35,
    answer: "Cervical Insufficiency",
    category: "Obstetrics",
    clues: [
      "A 29-year-old G3P0 woman at 20 weeks gestation presents for routine anatomy ultrasound. She has a history of two prior second-trimester losses at 18 and 21 weeks, both preceded by painless cervical dilation.",
      "She denies contractions, vaginal bleeding, or fluid leakage. She has a history of a LEEP procedure performed 4 years ago for CIN 3.",
      "Transvaginal ultrasound reveals a cervical length of 15 mm (normal >25 mm at this gestational age) with funneling of the internal os.",
      "On sterile speculum exam, the cervix is 2 cm dilated with membranes visible at the external os but not bulging.",
      "There is no evidence of infection — she is afebrile, WBC is normal, and there is no uterine tenderness or contractions on tocometry.",
      "An exam-indicated (rescue) cerclage is placed using the McDonald technique (purse-string suture around the cervix). She is placed on modified bed rest and progesterone supplementation. The cerclage will be removed at 36-37 weeks."
    ],
    summary: "Cervical insufficiency (formerly \"incompetent cervix\") is painless cervical dilation in the second trimester leading to recurrent pregnancy loss or preterm birth. It accounts for ~8% of second-trimester losses. Risk factors include prior cervical surgery (LEEP, cone biopsy, mechanical dilation), Müllerian anomalies, connective tissue disorders, and prior second-trimester loss. Classic presentation: painless cervical dilation with membrane prolapse, without contractions. Diagnosis is clinical/historical. Prevention: history-indicated cerclage at 12-14 weeks for women with ≥3 prior losses, or ultrasound-indicated cerclage if cervical length <25 mm before 24 weeks in women with prior preterm birth. Vaginal progesterone is used for short cervix without prior preterm birth. A cerclage mechanically reinforces the cervix with a suture (McDonald or Shirodkar technique)."
  },
  {
    id: 36,
    answer: "Intrauterine Growth Restriction",
    category: "Obstetrics",
    clues: [
      "A 32-year-old G2P1 woman at 32 weeks gestation is noted to have a fundal height of 27 cm, consistently measuring 3-4 cm less than expected over the past several visits.",
      "She has a history of chronic hypertension on labetalol and smokes half a pack of cigarettes daily. Her first pregnancy was complicated by a 5th-percentile neonate.",
      "Growth ultrasound reveals an estimated fetal weight at the 3rd percentile with an asymmetric pattern: the abdominal circumference is disproportionately small (<3rd percentile) while the head circumference is at the 25th percentile (head-sparing effect).",
      "Doppler studies of the umbilical artery show elevated systolic-to-diastolic (S/D) ratio with increased resistance index, indicating increased placental vascular resistance.",
      "Amniotic fluid index is 4.2 cm (oligohydramnios). The middle cerebral artery Doppler shows decreased pulsatility index — \"brain-sparing\" redistribution of blood flow.",
      "Antenatal surveillance is intensified with twice-weekly biophysical profiles and NSTs. Betamethasone is administered. Delivery is planned at 34 weeks given the abnormal Dopplers, but if absent or reversed end-diastolic flow develops, delivery would be indicated sooner."
    ],
    summary: "Intrauterine growth restriction (IUGR/FGR) is estimated fetal weight <10th percentile for gestational age. It is a significant cause of perinatal morbidity and mortality. Asymmetric IUGR (small abdomen, relatively preserved head) suggests placental insufficiency (the \"brain-sparing\" effect redirects blood flow to the brain). Causes include placental insufficiency (hypertension, preeclampsia, smoking, thrombophilia), fetal factors (chromosomal abnormalities, infections — TORCH), and maternal factors (malnutrition, substance use). Evaluation includes serial growth ultrasounds, umbilical artery Doppler (progression: elevated S/D → absent → reversed end-diastolic flow), MCA Doppler, and amniotic fluid assessment. Abnormal umbilical artery Doppler reflects increased placental resistance. Management depends on gestational age and severity — delivery timing balances risks of prematurity against ongoing placental insufficiency."
  },
  {
    id: 37,
    answer: "Bartholin Gland Cyst/Abscess",
    category: "Gynecology",
    clues: [
      "A 28-year-old woman presents with a 3-day history of an increasingly painful swelling at the vaginal opening on the left side. She is having difficulty sitting and walking.",
      "She reports the swelling began as a painless lump that she first noticed about 2 weeks ago. Over the past 3 days, it has become erythematous, warm, and exquisitely tender.",
      "She is febrile at 38.1°C. On exam, there is a 4 cm fluctuant, tender, erythematous mass at the posterolateral aspect of the vaginal introitus (5 o'clock position).",
      "The location of the mass at the posterolateral vaginal introitus (4-5 o'clock or 7-8 o'clock position) is the classic anatomic location of these glands.",
      "The Bartholin glands normally provide vaginal lubrication. Obstruction of the duct leads to cyst formation; secondary infection leads to abscess.",
      "Treatment involves incision and drainage with placement of a Word catheter (a small balloon catheter left in place for 4-6 weeks to allow epithelialization and create a new drainage tract — marsupialization equivalent). Wound cultures typically grow polymicrobial organisms, including anaerobes."
    ],
    summary: "The Bartholin glands are paired, pea-sized glands located at the 5 and 7 o'clock positions of the vaginal introitus. Duct obstruction leads to Bartholin cyst (typically painless), and secondary infection creates a Bartholin abscess (painful, erythematous, fluctuant). Abscesses are commonly polymicrobial (anaerobes, E. coli, and occasionally N. gonorrhoeae or C. trachomatis). Treatment of an abscess is incision and drainage with Word catheter placement for 4-6 weeks, or marsupialization. Simple incision and drainage alone has a high recurrence rate (~10-15%). In women over 40, biopsy should be performed to rule out Bartholin gland carcinoma (rare but important differential). Antibiotics alone are insufficient for a fluctuant abscess — drainage is essential."
  },
  {
    id: 38,
    answer: "Complete Breech Presentation",
    category: "Obstetrics",
    clues: [
      "A 29-year-old G1P0 woman at 37 weeks gestation presents for a routine prenatal visit. Leopold maneuvers reveal a round, hard, ballottable mass in the fundus and a soft, irregular mass in the pelvis.",
      "On vaginal exam, the presenting part is soft and irregular. The fetal heart tones are best heard above the umbilicus.",
      "Ultrasound confirms the fetus is in breech presentation with the buttocks as the presenting part. Both hips are flexed and both knees are flexed — the classic \"sitting cross-legged\" position.",
      "The estimated fetal weight is 3,100g. There are no contraindications to external cephalic version (ECV) identified: no placenta previa, no PROM, no uterine anomaly, and reactive NST.",
      "An external cephalic version (ECV) is attempted at 37 weeks under tocolysis (terbutaline) with ultrasound guidance. The procedure is unsuccessful after two attempts — the fetus returns to breech.",
      "Given the persistent breech presentation, a planned cesarean delivery at 39 weeks is recommended. She is counseled about the risks of vaginal breech delivery, including head entrapment (the aftercoming head is the largest part to deliver)."
    ],
    summary: "Breech presentation occurs in ~3-4% of term pregnancies. Types: frank breech (hips flexed, knees extended — most common), complete breech (hips and knees flexed), and footling breech (one or both feet presenting — highest risk). Risk factors include prematurity, multiple gestation, polyhydramnios, uterine anomalies, and placenta previa. Leopold maneuvers show a hard round mass (head) in the fundus. FHTs are heard above the umbilicus. External cephalic version (ECV) is recommended at 37 weeks for appropriate candidates — success rate ~50-60%. Contraindications to ECV include placenta previa, non-reassuring fetal status, ruptured membranes, and multiple gestation. Planned cesarean for persistent breech at term reduces perinatal mortality compared to vaginal breech delivery (Term Breech Trial). The major risk of vaginal breech delivery is head entrapment."
  },
  {
    id: 39,
    answer: "Ovarian Hyperstimulation Syndrome",
    category: "Reproductive Endocrinology",
    clues: [
      "A 27-year-old woman undergoing her first IVF cycle presents 5 days after oocyte retrieval with abdominal distension, bloating, and dyspnea. She had 28 oocytes retrieved.",
      "She reports a 6-pound weight gain over 3 days, decreased urine output, and nausea. She has a history of PCOS — her AMH was 8.2 ng/mL (elevated).",
      "On exam, the abdomen is distended with shifting dullness. Bilateral adnexal masses (enlarged ovaries) are palpable. She has mild peripheral edema.",
      "Labs reveal: hematocrit 48% (hemoconcentration), WBC 18,000, hyponatremia (Na+ 130), elevated creatinine at 1.4, and hypoalbuminemia (albumin 2.4 g/dL).",
      "Ultrasound shows bilateral enlarged ovaries (right 10 cm, left 9 cm) with multiple large cysts and significant ascites. A small right pleural effusion is also present.",
      "She is classified as severe OHSS. Management is supportive: IV albumin infusion (25%), aggressive fluid resuscitation with crystalloids, therapeutic paracentesis for symptomatic ascites, and VTE prophylaxis with enoxaparin. The frozen embryo transfer is postponed."
    ],
    summary: "Ovarian hyperstimulation syndrome (OHSS) is an iatrogenic complication of controlled ovarian stimulation, most commonly during IVF cycles. It results from excessive ovarian response to gonadotropins, leading to increased vascular permeability (VEGF-mediated). Third spacing of fluid causes ascites, pleural effusions, and hemoconcentration. Risk factors: young age, low BMI, PCOS, high AMH, large number of follicles/oocytes, and high estradiol levels. Severity ranges from mild (bloating) to life-threatening (renal failure, thromboembolism, ARDS). Hemoconcentration (Hct >45%) paradoxically coexists with intravascular depletion. Treatment is supportive: volume expansion, albumin, paracentesis, and VTE prophylaxis. Prevention strategies include GnRH antagonist trigger instead of hCG, freeze-all cycles, and cabergoline."
  },
  {
    id: 40,
    answer: "Placenta Accreta Spectrum",
    category: "Obstetrics",
    clues: [
      "A 36-year-old G4P3 woman with three prior cesarean deliveries has a placenta previa identified on her second-trimester anatomy ultrasound.",
      "Detailed ultrasound at 28 weeks shows loss of the normal retroplacental clear zone, multiple placental lacunae giving a \"Swiss cheese\" or \"moth-eaten\" appearance, and bulging of the placenta into the bladder wall.",
      "MRI of the pelvis confirms placental tissue extending through the myometrium to the uterine serosa with suspected bladder invasion.",
      "She is counseled about the high risk of massive hemorrhage at delivery. A multidisciplinary team is assembled including MFM, gynecologic oncology, urology, and interventional radiology.",
      "Blood bank is notified to prepare for massive transfusion protocol. Cell saver is arranged. The plan is for a scheduled cesarean hysterectomy.",
      "At 34 weeks (after betamethasone), a planned cesarean hysterectomy is performed with bilateral internal iliac artery balloon occlusion catheters placed preoperatively by IR. Estimated blood loss is 3,500 mL. Pathology confirms placenta percreta (invasion through the serosa into the bladder)."
    ],
    summary: "Placenta accreta spectrum (PAS) encompasses abnormally adherent or invasive placentation: accreta (attached to myometrium), increta (invades into myometrium), and percreta (penetrates through serosa ± into adjacent organs). The incidence has risen dramatically, driven by increasing cesarean delivery rates. The major risk factor is placenta previa + prior cesarean delivery (risk escalates with each subsequent cesarean). Ultrasound findings include loss of the retroplacental clear zone, irregular lacunae, myometrial thinning, and bladder wall involvement. MRI may assist in characterizing depth of invasion. PAS carries risk of life-threatening hemorrhage (average EBL 3-5 liters) and DIC. Optimal management: planned cesarean hysterectomy at 34-36 weeks at a center of excellence with multidisciplinary team. Do NOT attempt placental removal — leave it in situ and proceed to hysterectomy."
  }
]

export function getDailyPuzzle() {
  const startDate = new Date('2025-05-11')
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  startDate.setHours(0, 0, 0, 0)
  const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24))
  const index = ((diffDays % puzzles.length) + puzzles.length) % puzzles.length
  return { puzzle: puzzles[index], puzzleNumber: diffDays + 1 }
}

export function getPuzzleById(id) {
  return puzzles.find(p => p.id === id)
}

export function getAllPuzzles() {
  return puzzles
}

export default puzzles
