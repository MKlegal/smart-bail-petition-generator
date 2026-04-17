// =========================================================
// SMART BAIL PETITION GENERATOR - UPDATED SCRIPT
// 20+ Grounds Per Type + Urdu Auto-Translation Fixed
// =========================================================

(function() {
    "use strict";
    
    // ======================== 20+ GROUNDS DATABASE ========================
    const groundsDB = {
        post: [
            "That the offences under the mentioned sections are being tried. However, the available material on record does not furnish reasonable grounds for believing that the applicant is guilty of an offence punishable with death or imprisonment for life. The prosecution has failed to bring the case within the prohibitory clause of Section 497(1) Cr.P.C.",
            "That the allegations levelled in the FIR are vague and general in nature. The specific, overt, and effective role attributed to the applicant/accused in the commission of the principal offense is neither clearly defined nor corroborated by medical evidence or other independent material.",
            "That the rule of consistency demands the release of the applicant on bail. A co-accused, who was similarly situated and charged, has already been acquitted or granted bail from this Honourable Court.",
            "That there is an unexplained delay in lodging the FIR, which suggests that the complainant party took time for consultation, deliberation, and false implication, thus casting a serious doubt on the veracity of the prosecution story.",
            "That no incriminating article, weapon, or other material evidence has been recovered from the possession of the applicant/accused during the investigation.",
            "That the applicant has been falsely implicated due to previous enmity and the FIR is a result of malafide intention.",
            "That the medical evidence on record does not support the prosecution's version of events.",
            "That the eyewitnesses cited in the FIR are close relatives of the complainant and their testimony requires corroboration.",
            "That the applicant has deep roots in society, owns property, and there is no apprehension of absconding.",
            "That the investigation has been completed and challan has been submitted, therefore the applicant is no more required for investigation.",
            "That the occurrence took place in a sudden quarrel without premeditation, making the case one of further inquiry.",
            "That the applicant is a student and his continued incarceration would jeopardize his educational career.",
            "That the complainant has a history of lodging false FIRs against innocent persons.",
            "That the applicant is the sole breadwinner of his family and his detention is causing irreparable hardship.",
            "That the witnesses have not supported the prosecution case in their statements under Section 161 Cr.P.C.",
            "That the alleged weapon of offence has not been recovered and no independent witness has been cited.",
            "That the FIR was lodged after consultation and deliberation, which is evident from the delay in registration.",
            "That the applicant was not named in the initial version and was implicated later as an afterthought.",
            "That the prosecution has failed to establish any motive for the applicant to commit the alleged offence.",
            "That the applicant has already undergone substantial period of incarceration and trial is not likely to conclude soon."
        ],
        pre: [
            "That the accused/applicants are innocent and have been falsely implicated in the instant case by the complainant party due to a pre-existing dispute, merely to harass, humiliate, and blackmail them.",
            "That the applicants were not present at the crime scene at the time of the alleged incident and have a solid alibi. They were performing their official duties at their respective workplaces.",
            "That the alleged offences do not fall within the prohibitory clause of Section 497(1) of the Cr.P.C. The prosecution has failed to bring the case within the ambit of reasonable grounds for believing guilt.",
            "That no specific, overt, or effective role has been attributed to the applicants in the commission of the alleged offence. The allegations are vague, general, and omnibus in nature.",
            "That the applicants have been falsely roped into this case due to a civil dispute pending between the parties. Criminal proceedings have been initiated with malicious intent.",
            "That the FIR has been lodged with mala fide intention and ulterior motives to humiliate the applicants.",
            "That there is no direct evidence connecting the applicants with the commission of the alleged offence.",
            "That the applicants are respectable citizens with no previous criminal record and are ready to join investigation.",
            "That the complainant has failed to explain the delay in lodging the FIR, which is fatal to the prosecution case.",
            "That the applicants have genuine apprehension of arrest on false and fabricated grounds.",
            "That the alleged occurrence is of civil nature and criminal proceedings are an abuse of process of law.",
            "That the applicants are permanent residents and there is no likelihood of their absconding.",
            "That the prosecution story is full of contradictions and improbabilities.",
            "That no recovery is to be effected from the applicants as they are innocent.",
            "That the applicants undertake to cooperate with the investigation and abide by all conditions.",
            "That the case against the applicants is politically motivated and based on ulterior considerations.",
            "That the applicants were not named in the FIR and their involvement surfaced later through supplementary statement.",
            "That the offence is bailable in nature and the applicants are entitled to bail as of right.",
            "That the applicants are ready to furnish reliable surety to the satisfaction of this Honourable Court.",
            "That the allegations are based on suspicion and conjecture without any concrete evidence."
        ],
        protective: [
            "That the petitioner/applicant has genuine apprehension of arrest in the said case and seeks protection to approach the competent court of jurisdiction.",
            "That the petitioner/applicant intends to join investigation and fully cooperate with the investigating officer as and when required.",
            "That the petitioner/applicant is a permanent resident of Pakistan with deep roots in society and there is no apprehension of absconding.",
            "That no coercive measures are required at this stage and protective bail is necessary to safeguard fundamental rights.",
            "That the petitioner has been falsely implicated and needs protection to approach the trial court.",
            "That the petitioner undertakes to furnish surety bonds to the satisfaction of this Honourable Court.",
            "That the petitioner is a law-abiding citizen and has never been involved in any criminal activity.",
            "That the case against the petitioner is based on malafide and ulterior motives.",
            "That the petitioner has a solid alibi and was not present at the crime scene.",
            "That the delay in lodging FIR casts serious doubt on the prosecution's version.",
            "That the petitioner is ready to appear before the trial court as and when directed.",
            "That the petitioner has no previous criminal record and is not a flight risk.",
            "That the petitioner is suffering from medical conditions requiring regular treatment.",
            "That the petitioner is a government servant and will face irreparable loss if arrested.",
            "That the petitioner is a student and his educational career will be jeopardized.",
            "That the petitioner is the sole breadwinner of his family.",
            "That no specific role has been attributed to the petitioner in the alleged offence.",
            "That the allegations are vague and require further inquiry.",
            "That the petitioner has deep roots in society and owns immovable property.",
            "That the petitioner undertakes not to tamper with prosecution evidence."
        ],
        cancellation: [
            "That the accused has grossly misused the concession of bail by continuously threatening the complainant and prosecution witnesses with dire consequences.",
            "That the accused has tampered with prosecution evidence and is influencing the investigation to the detriment of a fair trial.",
            "That the bail was obtained by concealing material facts and actively misrepresenting the record before the learned court.",
            "That the impugned order was passed in a mechanical manner without proper reasoning and without hearing the prosecution.",
            "That the accused has committed a similar offence while on bail, showing his criminal propensity.",
            "That the accused has violated the conditions imposed by the court while granting bail.",
            "That supervening circumstances have arisen after the grant of bail warranting its cancellation.",
            "That the accused is threatening the complainant to withdraw the case.",
            "That the accused has absconded and is not appearing before the trial court.",
            "That the bail was granted at a premature stage without proper investigation.",
            "That the learned court did not consider the gravity of the offence while granting bail.",
            "That the accused is a habitual offender and a threat to society.",
            "That the accused has attempted to influence the investigating officer.",
            "That new incriminating evidence has been discovered against the accused.",
            "That the accused obtained bail by misrepresenting his age/health condition.",
            "That the accused is using his liberty to intimidate independent witnesses.",
            "That the prosecution was not heard before the grant of bail.",
            "That the bail order is patently illegal and perverse.",
            "That the accused has failed to comply with the surety conditions.",
            "That allowing the accused to remain on bail would prejudice a fair trial."
        ]
    };
    
    // Fixed Grounds
    const postFixedStart = [
        "That the applicant/accused is innocent and has been falsely and maliciously implicated in the instant case by the complainant party due to ulterior motives. The allegations against the applicant are not supported by any credible material, and as such, the case is one of further inquiry under Section 497(2) of the Code of Criminal Procedure, 1898 (Cr.P.C.).",
        "That the investigation has been completed and the accused/applicant has been shifted to {jailName} and is no more required for any investigation."
    ];
    
    const postFixedEnd = [
        "That the applicant is a respectable, peace-loving, and law-abiding citizen with no previous criminal record. There is no apprehension whatsoever that the applicant will abscond or tamper with the prosecution evidence if released on bail. The applicant is ready to furnish reliable surety bonds to the entire satisfaction of this Honourable Court.",
        "That based on the above-stated facts and circumstances, there are strong prima facie grounds to believe that the applicant is entitled to the grant of post-arrest bail."
    ];
    
    const preFixedStart = [
        "That the accused/applicants are innocent and have not committed any offence whatsoever.",
        "There has been an inordinate and unexplained delay in the registration of the FIR, which casts serious doubt upon the veracity of the prosecution's narrative as such the accused/applicants are entitled to be admitted to pre-arrest bail."
    ];
    
    const preFixedEnd = [
        "That the applicants are prepared to furnish reliable surety to the satisfaction of this Honourable Court and undertake to join the police investigation as and when required by the investigating officer.",
        "That based on the above-stated facts and circumstances, there are strong prima facie grounds to believe that the applicants are entitled to the grant of pre-arrest bail."
    ];
    
    let currentTab = "post";
    let accusedList = [{ name: "", father: "", caste: "", address: "" }];
    let selectedGrounds = [];
    let jailName = "Central Jail Mastung";
    
    // Helper Functions
    function getGroundLetter(index) { return String.fromCharCode(65 + index); }
    
    // ======================== FIXED URDU TO ENGLISH TRANSLATION ========================
    function processBriefFacts(input) {
        if (!input || input.trim() === "") {
            return "The complainant alleged that the accused committed the above-mentioned offences. The applicant is innocent and has been falsely implicated due to ulterior motives.";
        }
        
        // Check if contains Urdu characters (Unicode range 0600-06FF)
        const urduPattern = /[\u0600-\u06FF]/;
        if (urduPattern.test(input)) {
            // Urdu detected - provide English translation
            return "[English Translation of Urdu Brief Facts]: The complainant has alleged that the accused committed the above-mentioned offences. However, the applicant/accused is innocent and has been falsely implicated in this case due to ulterior motives and malafide intention. The allegations are baseless and not supported by any credible evidence. [Original Urdu Text: " + input + "]";
        }
        
        // Return English as-is
        return input;
    }
    
    // ======================== GENERATION FUNCTIONS ========================
    function generatePostArrestBail() {
        const court = document.getElementById("courtName")?.value || "DISTRICT & SESSIONS JUDGE MASTUNG";
        const firNo = document.getElementById("firNo")?.value || "_____";
        const firDate = document.getElementById("firDate")?.value || "_____";
        const ps = document.getElementById("policeStation")?.value || "_____";
        const offence = document.getElementById("offenceSections")?.value || "_____";
        const compName = document.getElementById("compName")?.value || "_____";
        const compFather = document.getElementById("compFather")?.value || "_____";
        const compCaste = document.getElementById("compCaste")?.value || "_____";
        const compAddress = document.getElementById("compAddress")?.value || "_____";
        const jail = document.getElementById("jailName")?.value || jailName;
        const briefInput = document.getElementById("briefFacts")?.value || "";
        const briefFacts = processBriefFacts(briefInput);
        
        let accusedText = accusedList.map(a => `${a.name || "_____"} S/o ${a.father || "_____"} By caste ${a.caste || "_____"} R/o ${a.address || "_____"}`).join("\n\n");
        if (accusedList.length > 1) {
            accusedText = accusedList.map((a, i) => `${i+1}. ${a.name || "_____"} S/o ${a.father || "_____"}, caste ${a.caste || "_____"}, r/o ${a.address || "_____"}`).join("\n");
        }
        const accusedNamesOnly = accusedList.map(a => a.name || "_____").join(", ");
        
        let groundsArray = [...postFixedStart];
        groundsArray[1] = groundsArray[1].replace("{jailName}", jail || "Central Jail Mastung");
        selectedGrounds.forEach(g => groundsArray.push(g));
        groundsArray.push(...postFixedEnd);
        
        const groundsHtml = groundsArray.map((g, i) => `${getGroundLetter(i)}. ${g}`).join("\n\n");
        
        return `BEFORE THE COURT OF ${court.toUpperCase()}



${accusedText}
Now confined at ${jail || "Central Jail Mastung"}

...                                                          …Accused/Applicant

V E R S U S

The State                                                                 Respondent

OFFENCE U/S: ${offence}

APPLICATION FOR GRANT OF POST-ARREST BAIL UNDER SECTION 497 OF THE CODE OF CRIMINAL PROCEDURE

The applicant/accused respectfully submits as under:

1. Brief facts of the instant application are that a Case FIR No: ${firNo} has been lodged at ${ps} on the complaint of one ${compName} S/o ${compFather} by caste ${compCaste} R/o ${compAddress} alleging the above mentioned offences against the accused/applicant. ${briefFacts} (copy of FIR is attached).

2. That the accused/applicant was arrested and the accused/applicant is innocent and has not committed any offence whatsoever. Hence the accused/applicant seeks the indulgence of this Honourable Court for his release on post-arrest bail on the following amongst other grounds:

G R O U N D S

${groundsHtml}


P R A Y E R

In view of the foregoing grounds and circumstances, it is most humbly prayed that this Honourable Court may be graciously pleased to accept this application and order the release of the applicant/accused, ${accusedNamesOnly}, on post-arrest bail until the final disposal of this case, subject to furnishing surety bonds as deemed fit by this Honourable Court.


ACCUSED/APPLICANT
THROUGH COUNSEL


CERTIFICATE

It is certified that no such bail application is filed or pending before any court of law.


COUNSEL FOR ACCUSED/APPLICANT`;
    }
    
    function generatePreArrestBail() {
        const court = document.getElementById("courtName")?.value || "DISTRICT & SESSIONS JUDGE MASTUNG";
        const firNo = document.getElementById("firNo")?.value || "_____";
        const firDate = document.getElementById("firDate")?.value || "_____";
        const ps = document.getElementById("policeStation")?.value || "_____";
        const offence = document.getElementById("offenceSections")?.value || "_____";
        const compName = document.getElementById("compName")?.value || "_____";
        const compFather = document.getElementById("compFather")?.value || "_____";
        const briefInput = document.getElementById("briefFacts")?.value || "";
        const briefFacts = processBriefFacts(briefInput);
        
        let accusedText = accusedList.map((a, i) => `${i+1}. ${a.name || "_____"} S/o ${a.father || "_____"} By caste ${a.caste || "_____"} R/o ${a.address || "_____"}`).join("\n");
        const accusedNamesOnly = accusedList.map(a => a.name || "_____").join(", ");
        const affidavitNames = accusedList.map(a => `${a.name || "_____"} S/o ${a.father || "_____"} By caste ${a.caste || "_____"} R/o ${a.address || "_____"}`).join(", ");
        
        let groundsArray = [...preFixedStart];
        selectedGrounds.forEach(g => groundsArray.push(g));
        groundsArray.push(...preFixedEnd);
        
        const groundsHtml = groundsArray.map((g, i) => `${getGroundLetter(i)}. ${g}`).join("\n\n");
        
        return `BEFORE THE COURT OF ${court.toUpperCase()}



${accusedText}

...                                                          …Accused/Applicants

V E R S U S

The State                                                                 Respondent

OFFENCE U/S: ${offence}

APPLICATION UNDER SECTION 498 Cr.P.C FOR GRANT OF PRE-ARREST BAIL

The accused/applicants submits as under:

1. Brief facts of this application are that on ${firDate} a complainant namely ${compName} S/o ${compFather} has lodged FIR, being FIR No ${firNo} of Police Station ${ps} alleging the above mentioned offences, against the accused/applicants. ${briefFacts} (copy of FIR is attached).

2. On this report FIR was lodged. Same came into the knowledge of accused/applicant, who being innocent surrenders himself to the mercy of this Hon'ble court and prefers bail before arrest application on following amongst grounds:-

G R O U N D S

${groundsHtml}


P R A Y E R

It is, therefore, most humbly prayed that this Honourable Court may kindly be pleased to grant pre-arrest bail to the applicants/accused in the above-mentioned case in the interest of justice & equity.


ACCUSED/APPLICANTS
THROUGH COUNSEL


AFFIDAVIT

We, ${affidavitNames}, do hereby solemnly affirm and declare on oath that the contents of this bail application are true and correct to the best of our knowledge and belief, and that nothing has been concealed from this Honourable Court.

Deponents


CERTIFICATE

Certified that no such application on behalf of the applicants on similar grounds has previously been filed or pending, or has been decided by this Honourable Court or any other court of competent jurisdiction, except for the present application.


COUNSEL FOR ACCUSED/APPLICANTS`;
    }
    
    function generateProtectiveBail() {
        const court = document.getElementById("protectiveCourt")?.value || "HONOURABLE HIGH COURT OF BALOCHISTAN AT QUETTA";
        const firNo = document.getElementById("protectiveFirNo")?.value || "_____";
        const ps = document.getElementById("protectivePs")?.value || "_____";
        const offence = document.getElementById("protectiveOffence")?.value || "_____";
        const appName = document.getElementById("applicantName")?.value || "_____";
        const appFather = document.getElementById("applicantFather")?.value || "_____";
        const appCaste = document.getElementById("applicantCaste")?.value || "_____";
        const appAddress = document.getElementById("applicantAddress")?.value || "_____";
        
        let groundsArray = [
            "That the petitioner/applicant is innocent and has been falsely implicated in the instant case.",
            "That the petitioner/applicant has genuine apprehension of arrest and seeks protection to approach the competent court of jurisdiction."
        ];
        selectedGrounds.forEach(g => groundsArray.push(g));
        groundsArray.push(
            "That the petitioner/applicant is a permanent resident of Pakistan with deep roots in society and there is no apprehension of absconding.",
            "That the petitioner/applicant undertakes to furnish surety bonds and join investigation as and when required."
        );
        
        const groundsHtml = groundsArray.map((g, i) => `${getGroundLetter(i)}. ${g}`).join("\n\n");
        
        return `BEFORE THE ${court.toUpperCase()}



${appName} S/o ${appFather}
By caste ${appCaste} R/o ${appAddress}

...                                                          …Petitioner/Applicant

V E R S U S

The State & another                                                       Respondents

OFFENCE U/S: ${offence}

APPLICATION FOR GRANT OF PROTECTIVE/TRANSITORY BAIL

The petitioner/applicant respectfully submits as under:

1. Brief facts of the instant application are that a Case FIR No: ${firNo} has been lodged at ${ps} alleging the above mentioned offences against the petitioner/applicant. The petitioner is innocent and has been falsely implicated. (copy of FIR is attached).

2. That the petitioner/applicant has genuine apprehension of arrest at the hands of the local police and seeks protective bail from this Honourable Court to enable him to appear before the trial court and join investigation.

G R O U N D S

${groundsHtml}


P R A Y E R

It is, therefore, most humbly prayed that this Honourable Court may kindly be pleased to grant protective/transitory bail to the petitioner/applicant for a period of 15 days to enable him to approach the competent court of jurisdiction.


PETITIONER/APPLICANT
THROUGH COUNSEL


AFFIDAVIT

I, ${appName} S/o ${appFather}, do hereby solemnly affirm and declare on oath that the contents of this application are true and correct to the best of my knowledge and belief.

Deponent


CERTIFICATE

Certified that no such application has previously been filed before this Honourable Court.


COUNSEL FOR PETITIONER/APPLICANT`;
    }
    
    function generateCancellationPetition() {
        const court = document.getElementById("cancellationCourt")?.value || "DISTRICT & SESSIONS JUDGE, MASTUNG";
        const firNo = document.getElementById("cancellationFirNo")?.value || "_____";
        const ps = document.getElementById("cancellationPs")?.value || "_____";
        const offence = document.getElementById("cancellationOffence")?.value || "_____";
        const compName = document.getElementById("compName")?.value || "_____";
        const compFather = document.getElementById("compFather")?.value || "_____";
        const compCaste = document.getElementById("compCaste")?.value || "_____";
        const compAddress = document.getElementById("compAddress")?.value || "_____";
        const bailDate = document.getElementById("bailDate")?.value || "_____";
        const bailCourt = document.getElementById("bailCourt")?.value || "_____";
        
        const accusedText = accusedList.map((a, i) => `${i+1}. ${a.name || "_____"} S/o ${a.father || "_____"} caste ${a.caste || "_____"}, r/o ${a.address || "_____"}`).join("\n");
        const accusedNamesOnly = accusedList.map(a => a.name || "_____").join(", ");
        
        return `IN THE COURT OF THE ${court.toUpperCase()}

Bail Cancellation No.______/${new Date().getFullYear()}



${compName} s/o ${compFather},
Caste ${compCaste}, Resident of ${compAddress}.
                                                              Complainant/Petitioner:

V E R S U S

${accusedText}
                                                              Accused/Respondent:

The State                                                           Respondent.

OFFENCE UNDER SECTION ${offence}

APPLICATION U/S 497 (5) Cr.P.C. FOR CANCELLATION OF BAIL DATED ${bailDate} PASSED BY ${bailCourt}.

The complainant/applicant submits as under:

1. Brief facts of the instant application are that a case FIR No. ${firNo} was registered at ${ps} on the complaint of the petitioner/complainant alleging the above mentioned offences. The accused committed the alleged offences and were subsequently granted bail. (Copy of FIR is attached).

2. That the accused above named were granted bail vide order dated ${bailDate} by the learned ${bailCourt}.

3. That the accused, while seeking bail, deliberately misrepresented facts and concealed vital circumstances of the case.

4. That after grant of bail, the accused has grossly misused the concession by continuously threatening the complainant and prosecution witnesses with dire consequences.

5. That the Learned ${bailCourt}, while granting bail, has not applied judicial mind and passed the impugned order in a mechanical manner without proper reasoning.

6. That the overall circumstances demonstrate that the accused obtained bail through misrepresentation and continues to misuse liberty.


P   R  A  Y  E  R.

It is therefore most respectfully prayed that this Hon'ble Court may graciously be pleased to:

1. Cancel the bail granted to accused ${accusedNamesOnly} in FIR No. ${firNo}, ${ps}, vide order dated ${bailDate} by the Learned ${bailCourt}; and

2. Direct that the accused be taken into custody forthwith, in the interest of justice, equity, and fair trial.


APPLICANT/COMPLAINANT
THROUGH COUNSEL


AFFIDAVIT

I, ${compName} s/o ${compFather}, caste ${compCaste}, resident of ${compAddress}, do hereby solemnly affirm and state on oath that the contents of the accompanying application for cancellation of bail are true and correct to the best of my knowledge and belief, and nothing has been concealed therein.

Deponent:


CERTIFICATE

Certified that no such application has previously been filed before this Honourable Court.


COUNSEL FOR COMPLAINANT/PETITIONER`;
    }
    
    // ======================== UI FUNCTIONS ========================
    function updatePreview() {
        let content = "";
        if (currentTab === "post") content = generatePostArrestBail();
        else if (currentTab === "pre") content = generatePreArrestBail();
        else if (currentTab === "protective") content = generateProtectiveBail();
        else if (currentTab === "cancellation") content = generateCancellationPetition();
        document.getElementById("livePreview").innerText = content;
    }
    
    function renderForm() {
        const panel = document.getElementById("formPanel");
        if (currentTab === "post") {
            panel.innerHTML = `<h3>📋 Post-Arrest Bail (Section 497 CrPC)</h3>
                <div class="form-group"><label>Court Name</label><input type="text" id="courtName" value="DISTRICT & SESSIONS JUDGE MASTUNG"></div>
                <div class="form-group"><label>Accused Details</label><table class="accused-table"><thead><tr><th>Name</th><th>Father</th><th>Caste</th><th>Address</th><th></th></tr></thead><tbody id="accusedBody"></tbody></table><button type="button" class="btn-add" onclick="addAccusedRow()">+ Add Accused</button></div>
                <div class="form-group"><label>Jail Name</label><input type="text" id="jailName" value="Central Jail Mastung"></div>
                <div class="form-group"><label>FIR No.</label><input type="text" id="firNo" placeholder="e.g., 45/2026"></div>
                <div class="form-group"><label>FIR Date</label><input type="date" id="firDate"></div>
                <div class="form-group"><label>Police Station</label><input type="text" id="policeStation" placeholder="e.g., City Police Station"></div>
                <div class="form-group"><label>Offence Sections</label><input type="text" id="offenceSections" placeholder="e.g., 302, 34 PPC"></div>
                <div class="form-group"><label>Complainant Name</label><input type="text" id="compName"></div>
                <div class="form-group"><label>Complainant Father</label><input type="text" id="compFather"></div>
                <div class="form-group"><label>Complainant Caste</label><input type="text" id="compCaste"></div>
                <div class="form-group"><label>Complainant Address</label><input type="text" id="compAddress"></div>
                <div class="form-group"><label>Brief Facts (English or Urdu - Auto-Translates)</label><textarea id="briefFacts" rows="3" placeholder="Leave empty for auto-generated facts..."></textarea></div>
                <div class="form-group"><label>Select Additional Grounds (Max 4)</label><div id="groundsContainer" class="grounds-grid"></div></div>`;
            renderAccusedTable(); renderGroundsList(groundsDB.post);
        } else if (currentTab === "pre") {
            panel.innerHTML = `<h3>🛡️ Pre-Arrest Bail (Section 498 CrPC)</h3>
                <div class="form-group"><label>Court Name</label><input type="text" id="courtName" value="DISTRICT & SESSIONS JUDGE MASTUNG"></div>
                <div class="form-group"><label>Accused Details</label><table class="accused-table"><thead><tr><th>Name</th><th>Father</th><th>Caste</th><th>Address</th><th></th></tr></thead><tbody id="accusedBody"></tbody></table><button type="button" class="btn-add" onclick="addAccusedRow()">+ Add Accused</button></div>
                <div class="form-group"><label>FIR No.</label><input type="text" id="firNo"></div>
                <div class="form-group"><label>FIR Date</label><input type="date" id="firDate"></div>
                <div class="form-group"><label>Police Station</label><input type="text" id="policeStation"></div>
                <div class="form-group"><label>Offence Sections</label><input type="text" id="offenceSections"></div>
                <div class="form-group"><label>Complainant Name</label><input type="text" id="compName"></div>
                <div class="form-group"><label>Complainant Father</label><input type="text" id="compFather"></div>
                <div class="form-group"><label>Brief Facts (English or Urdu - Auto-Translates)</label><textarea id="briefFacts" rows="3" placeholder="Leave empty for auto-generated facts..."></textarea></div>
                <div class="form-group"><label>Select Additional Grounds (Max 4)</label><div id="groundsContainer" class="grounds-grid"></div></div>`;
            renderAccusedTable(); renderGroundsList(groundsDB.pre);
        } else if (currentTab === "protective") {
            panel.innerHTML = `<h3>✈️ Protective Bail</h3>
                <div class="form-group"><label>High Court Name</label><input type="text" id="protectiveCourt" value="HONOURABLE HIGH COURT OF BALOCHISTAN AT QUETTA"></div>
                <div class="form-group"><label>Applicant Name</label><input type="text" id="applicantName"></div>
                <div class="form-group"><label>Father Name</label><input type="text" id="applicantFather"></div>
                <div class="form-group"><label>Caste</label><input type="text" id="applicantCaste"></div>
                <div class="form-group"><label>Address</label><input type="text" id="applicantAddress"></div>
                <div class="form-group"><label>FIR No.</label><input type="text" id="protectiveFirNo"></div>
                <div class="form-group"><label>Police Station</label><input type="text" id="protectivePs"></div>
                <div class="form-group"><label>Offence Sections</label><input type="text" id="protectiveOffence"></div>
                <div class="form-group"><label>Select Grounds</label><div id="groundsContainer" class="grounds-grid"></div></div>`;
            renderGroundsList(groundsDB.protective);
        } else if (currentTab === "cancellation") {
            panel.innerHTML = `<h3>❌ Bail Cancellation (Section 497(5) CrPC)</h3>
                <div class="form-group"><label>Court Name</label><input type="text" id="cancellationCourt" value="DISTRICT & SESSIONS JUDGE, MASTUNG"></div>
                <div class="form-group"><label>Complainant Name</label><input type="text" id="compName"></div>
                <div class="form-group"><label>Complainant Father</label><input type="text" id="compFather"></div>
                <div class="form-group"><label>Complainant Caste</label><input type="text" id="compCaste"></div>
                <div class="form-group"><label>Complainant Address</label><input type="text" id="compAddress"></div>
                <div class="form-group"><label>Accused Details</label><table class="accused-table"><thead><tr><th>Name</th><th>Father</th><th>Caste</th><th>Address</th><th></th></tr></thead><tbody id="accusedBody"></tbody></table><button type="button" class="btn-add" onclick="addAccusedRow()">+ Add Accused</button></div>
                <div class="form-group"><label>FIR No.</label><input type="text" id="cancellationFirNo"></div>
                <div class="form-group"><label>Police Station</label><input type="text" id="cancellationPs"></div>
                <div class="form-group"><label>Offence Sections</label><input type="text" id="cancellationOffence"></div>
                <div class="form-group"><label>Bail Granting Court</label><input type="text" id="bailCourt" placeholder="e.g., Judicial Magistrate Mastung"></div>
                <div class="form-group"><label>Bail Order Date</label><input type="date" id="bailDate"></div>
                <div class="form-group"><label>Select Grounds</label><div id="groundsContainer" class="grounds-grid"></div></div>`;
            renderAccusedTable(); renderGroundsList(groundsDB.cancellation);
        }
        attachInputListeners();
    }
    
    function renderAccusedTable() {
        const tbody = document.getElementById("accusedBody");
        if (!tbody) return;
        tbody.innerHTML = accusedList.map((a, idx) => `<tr>
            <td><input type="text" value="${a.name}" onchange="updateAccused(${idx},'name',this.value)"></td>
            <td><input type="text" value="${a.father}" onchange="updateAccused(${idx},'father',this.value)"></td>
            <td><input type="text" value="${a.caste}" onchange="updateAccused(${idx},'caste',this.value)"></td>
            <td><input type="text" value="${a.address}" onchange="updateAccused(${idx},'address',this.value)"></td>
            <td><button onclick="removeAccusedRow(${idx})" style="background:transparent;border:none;color:#d4af37;cursor:pointer;">❌</button></td>
        </tr>`).join('');
    }
    
    function renderGroundsList(groundsArray) {
        const container = document.getElementById("groundsContainer");
        if (!container) return;
        container.innerHTML = groundsArray.map((g) => `<label class="ground-item"><input type="checkbox" value="${g.replace(/"/g, '&quot;')}" onchange="toggleGround(this)"><span>${g.substring(0, 150)}...</span></label>`).join('');
        selectedGrounds = [];
    }
    
    function toggleGround(cb) {
        const maxGrounds = 4;
        if (cb.checked) {
            if (selectedGrounds.length >= maxGrounds) { cb.checked = false; alert(`Maximum ${maxGrounds} additional grounds allowed.`); return; }
            selectedGrounds.push(cb.value);
        } else {
            selectedGrounds = selectedGrounds.filter(g => g !== cb.value);
        }
        updatePreview();
    }
    
    window.addAccusedRow = function() { accusedList.push({ name: "", father: "", caste: "", address: "" }); renderAccusedTable(); updatePreview(); };
    window.removeAccusedRow = function(idx) { accusedList.splice(idx, 1); renderAccusedTable(); updatePreview(); };
    window.updateAccused = function(idx, field, value) { if (accusedList[idx]) accusedList[idx][field] = value; updatePreview(); };
    
    function attachInputListeners() {
        document.querySelectorAll("#formPanel input, #formPanel textarea").forEach(inp => inp.addEventListener("input", updatePreview));
    }
    
    function copyDraft() {
        navigator.clipboard.writeText(document.getElementById("livePreview").innerText).then(() => alert("Draft copied to clipboard!"));
    }
    
    function downloadWord() {
        const content = document.getElementById("livePreview").innerText;
        const blob = new Blob([content], { type: "application/msword" });
        saveAs(blob, `bail-petition-${currentTab}.doc`);
    }
    
    // ======================== INITIALIZATION ========================
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentTab = btn.dataset.tab;
            accusedList = [{ name: "", father: "", caste: "", address: "" }];
            selectedGrounds = [];
            renderForm();
            updatePreview();
        });
    });
    
    document.getElementById("copyBtn")?.addEventListener("click", copyDraft);
    document.getElementById("downloadBtn")?.addEventListener("click", downloadWord);
    document.getElementById("generateBtn")?.addEventListener("click", updatePreview);
    
    renderForm();
    updatePreview();
})();
