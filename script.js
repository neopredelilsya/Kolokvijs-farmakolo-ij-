const questions = [
    {
        question: "Kura zāļu grupa kavē nātrija kanālus un pagarina darbības potenciālu?",
        answers: ["Beta adrenoblokatori", "Kalcija kanālu blokatori", "Membrānu stabilizatori (Ia klase)", "Angiotenzīna II receptoru blokatori"],
        correctIndex: 2
    },
    {
        question: "Kuras zāles ir tiešie trombīna inhibitori?",
        answers: ["Dabigatrāns", "Rivaroksabāns", "Klopidogrels", "Heparīns"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles galvenokārt lieto hipertensijas ārstēšanā, ja pacients nepanes AKE inhibitorus?",
        answers: ["ARB (angiotenzīna II receptoru blokatori)", "Kalcija kanālu blokatori", "Beta adrenoblokatori", "Centrālas darbības antihipertensīvie līdzekļi"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles inhibē ciklooksigenāzi un kavē tromboksāna A2 sintēzi?",
        answers: ["Klopidogrels", "Acetilsalicilskābe", "Dabigatrāns", "Enalaprils"],
        correctIndex: 1
    },
    {
        question: "Kura diurētiķa darbības vieta ir Henles cilpas ascendējošā daļa?",
        answers: ["Furosemīds", "Indapamīds", "Hidrohlortiazīds", "Spironolaktons"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles lieto hipertrofiskas kardiomiopātijas gadījumā, lai samazinātu sirds slodzi?",
        answers: ["Propranolols", "Verapamils", "Amiodarons", "Klonidīns"],
        correctIndex: 1
    },
    {
        question: "Kura zāle ir minerālkortikoīdu receptoru antagonists?",
        answers: ["Spironolaktons", "Hidrohlortiazīds", "Furosemīds", "Rilmenidīns"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles ir izvēles līdzeklis supraventrikulāras tahikardijas ārstēšanai?",
        answers: ["Lidokaīns", "Amiodarons", "Verapamils", "Doksazosīns"],
        correctIndex: 2
    },
    {
        question: "Kuras zāles lieto mirdzaritmijas frekvences kontrolei?",
        answers: ["Propranolols", "Amiodarons", "Digoksīns", "Visas iepriekš minētās"],
        correctIndex: 3
    },
    {
        question: "Kura statīna zāles ir visefektīvākā ZBL holesterīna līmeņa samazināšanai?",
        answers: ["Simvastatīns", "Atorvastatīns", "Rosuvastatīns", "Pravastatīns"],
        correctIndex: 2
    },
    {
        question: "Kuras zāles lieto plaušu hipertensijas ārstēšanai?",
        answers: ["Bosentāns", "Klonidīns", "Enalaprils", "Tamsulosīns"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles ir selektīvas alfa-1 receptoru blokatori?",
        answers: ["Tamsulosīns", "Propranolols", "Telmisartāns", "Hidrohlortiazīds"],
        correctIndex: 0
    },
    {
        question: "Kura zāle ir atgriezenisks P2Y12 receptoru antagonists?",
        answers: ["Klopidogrels", "Tikagrelors", "Acetilsalicilskābe", "Dabigatrāns"],
        correctIndex: 1
    },
    {
        question: "Kuras zāles inhibē renīnu un nomāc RAAS aktivāciju?",
        answers: ["Aliskirēns", "Perindoprils", "Losartāns", "Moksonidīns"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles lieto nieru aizsardzībai diabētiskās nefropātijas gadījumā?",
        answers: ["Enalaprils", "Losartāns", "Abas iepriekš minētās", "Neviena no iepriekš minētajām"],
        correctIndex: 2
    },
    {
        question: "Kuras zāles izraisa QT intervāla pagarināšanos?",
        answers: ["Amiodarons", "Lidokaīns", "Hidrohlortiazīds", "Dabigatrāns"],
        correctIndex: 0
    },
    {
        question: "Kura diurētiķu klase ir piemērota tūskas ārstēšanai sirds mazspējas gadījumā?",
        answers: ["Tiazīdi", "Cilpas diurētiķi", "Kāliju aizturošie diurētiķi", "Osmotiskie diurētiķi"],
        correctIndex: 1
    },
    {
        question: "Kuras zāles kavē kalcija iekļūšanu asinsvadu gludās muskulatūras šūnās?",
        answers: ["Amlodipīns", "Furosemīds", "Klopidogrels", "Verapamils"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles lieto hipertensijas ārstēšanai grūtniecības laikā?",
        answers: ["Metildopa", "Klonidīns", "Nifedipīns", "Visas iepriekš minētās"],
        correctIndex: 3
    },
    {
        question: "Kuras zāles tiek uzskatītas par pirmās izvēles līdzekli akūtas koronāras sindroma ārstēšanā?",
        answers: ["Aspirīns", "Amiodarons", "Tikagrelors", "Abas A un C"],
        correctIndex: 3
    },
    {
        question: "Kuras zāles galvenokārt ietekmē centrālo nervu sistēmu, samazinot simpātiskās nervu sistēmas aktivitāti?",
        answers: ["Moksonidīns", "Nebivolols", "Furosemīds", "Verapamils"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles ir piemērotas sirds mazspējas pacientiem ar zemu kreisā kambara izsviedes frakciju?",
        answers: ["Eplerenons", "Furosemīds", "Amiodarons", "Tikagrelors"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles lieto miokarda infarkta sekundārai profilaksei?",
        answers: ["Aspirīns", "Klopidogrels", "Tikagrelors", "Visas iepriekš minētās"],
        correctIndex: 3
    },
    {
        question: "Kuras zāles ir piemērotas glaukomas ārstēšanai?",
        answers: ["Dorzolamīds", "Spironolaktons", "Amiodarons", "Rivaroksabāns"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles galvenokārt lieto hiperlipidēmijas ārstēšanā?",
        answers: ["Simvastatīns", "Ezetimībs", "Evolokumabs", "Visas iepriekš minētās"],
        correctIndex: 3
    },
    {
        question: "Kuri antikoagulanti darbojas, inhibējot K vitamīna atkarīgos recēšanas faktorus?",
        answers: ["Dabigatrāns", "Varfarīns", "Rivaroksabāns", "Heparīns"],
        correctIndex: 1
    },
    {
        question: "Kura zāļu klase pagarina refraktāro periodu, bloķējot kālija kanālus?",
        answers: ["Beta adrenoblokatori", "III klases antiaritmiskie līdzekļi", "Kalcija kanālu blokatori", "Membrānu stabilizatori"],
        correctIndex: 1
    },
    {
        question: "Kādu efektu uz EKG var izraisīt hinidīns?",
        answers: ["PR intervāla saīsināšana", "QT intervāla pagarināšana", "ST segmenta depresija", "QRS kompleksa saīsināšana"],
        correctIndex: 1
    },
    {
        question: "Kuras zāles lieto, lai samazinātu koronārās sirds slimības izraisītu trombembolijas risku?",
        answers: ["Klopidogrels", "Tikagrelors", "Aspirīns", "Visas minētās"],
        correctIndex: 3
    },
    {
        question: "Kas nosaka tiazīdu diurētiskā efekta 'plato'?",
        answers: ["Nātrija un hlora reabsorbcijas kavēšana", "Maksimāla diurēzes palielināšanās, neskatoties uz devas palielināšanu", "Kālija jonu aizture", "Aldosterona receptoru blokāde"],
        correctIndex: 1
    },
    {
        question: "Kuras zāles ir ieteicamas mirdzaritmijas ritma kontrolei bez strukturālas sirds slimības?",
        answers: ["Etacizīns", "Amiodarons", "Lidokaīns", "Sotalols"],
        correctIndex: 0
    },
    {
        question: "Kāds ir dabigatrāna darbības mehānisms?",
        answers: ["Tieša trombīna inhibīcija", "Netieša trombīna inhibīcija", "Antiagregantu receptoru blokāde", "K vitamīna inhibīcija"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles lieto pie refraktāras hipertensijas un metabola sindroma?",
        answers: ["Moksonidīns", "Nebivolols", "Spironolaktons", "Furosemīds"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles izraisa hiperkaliēmiju un ginekomastiju?",
        answers: ["Spironolaktons", "Hidrohlortiazīds", "Furosemīds", "Indapamīds"],
        correctIndex: 0
    },
    {
        question: "Kura medikamenta terapeitiskais efekts ir tieši saistīts ar CYP450 enzīmu metabolismu?",
        answers: ["Klopidogrels", "Dabigatrāns", "Tikagrelors", "Varfarīns"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles samazina perifēro asinsvadu pretestību bez būtiskas ietekmes uz sirds slodzi?",
        answers: ["ARB (angiotenzīna II receptoru blokatori)", "Beta adrenoblokatori", "Centrālas darbības antihipertensīvie līdzekļi", "AKE inhibitori"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles lieto akūtas miokarda infarkta izraisītas sirds mazspējas ārstēšanai?",
        answers: ["Eplerenons", "Amiodarons", "Furosemīds", "Bosentāns"],
        correctIndex: 0
    },
    {
        question: "Kura zāļu klase ietekmē sirds kontraktilitāti un automātismu, bloķējot beta-1 receptorus?",
        answers: ["Kalcija kanālu blokatori", "Beta adrenoblokatori", "ARB", "III klases antiaritmiskie līdzekļi"],
        correctIndex: 1
    },
    {
        question: "Kuras zāles lieto trombolīzei?",
        answers: ["Streptokināze", "Tikagrelors", "Dabigatrāns", "Varfarīns"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles ir piemērotas glaukomas ārstēšanai, samazinot intraokulārā šķidruma veidošanos?",
        answers: ["Dorzolamīds", "Mannitols", "Furosemīds", "Indapamīds"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles pagarina QT intervālu un var izraisīt 'torsades de pointes'?",
        answers: ["Amiodarons", "Hinidīns", "Sotalols", "Visas iepriekš minētās"],
        correctIndex: 3
    },
    {
        question: "Kuras zāles samazina aldosterona sekrēciju, bloķējot angiotenzīna II receptorus?",
        answers: ["Losartāns", "Enalaprils", "Aliskirēns", "Klonidīns"],
        correctIndex: 0
    },
    {
        question: "Kāds ir evolokumaba darbības mehānisms?",
        answers: ["PCSK9 inhibīcija", "Statīnu metabolisma uzlabošana", "HMG-CoA reduktāzes inhibīcija", "Lipāzes aktivācija"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles lieto hipertensijas ārstēšanai grūtniecības laikā, neradot teratogēnu efektu?",
        answers: ["Metildopa", "Klonidīns", "Nifedipīns", "Visas iepriekš minētās"],
        correctIndex: 3
    },
    {
        question: "Kuras zāles inhibē L-tipa kalcija kanālus un samazina miokarda skābekļa patēriņu?",
        answers: ["Verapamils", "Amlodipīns", "Diltiazems", "Abas A un C"],
        correctIndex: 3
    },
    {
        question: "Kuras zāles ir selektīvs aldosterona antagonists un neizraisa ginekomastiju?",
        answers: ["Spironolaktons", "Eplerenons", "Indapamīds", "Hidrohlortiazīds"],
        correctIndex: 1
    },
    {
        question: "Kura zāļu klase ietekmē bradikinīna metabolismu, izraisot klepu kā blakni?",
        answers: ["AKE inhibitori", "ARB", "Renīna inhibitori", "Beta adrenoblokatori"],
        correctIndex: 0
    },
    {
        question: "Kura zāle ir efektīva diurētiskās rezistences gadījumā?",
        answers: ["Torasemīds", "Furosemīds", "Hidrohlortiazīds", "Spironolaktons"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles lieto hipertensijas ārstēšanai pacientiem ar hronisku nieru slimību?",
        answers: ["AKE inhibitori", "ARB", "Abas iepriekš minētās", "Neviena no iepriekš minētajām"],
        correctIndex: 2
    },
    {
        question: "Kuras zāles tiek izmantotas forsētās diurēzes radīšanai saindēšanās gadījumā?",
        answers: ["Furosemīds", "Mannitols", "Torasemīds", "Spironolaktons"],
        correctIndex: 1
    },
    {
        question: "Kuri antikoagulanti darbojas, inhibējot K vitamīna atkarīgos recēšanas faktorus?",
        answers: ["Dabigatrāns", "Varfarīns", "Rivaroksabāns", "Heparīns"],
        correctIndex: 1
    },
    {
        question: "Kura zāļu klase pagarina refraktāro periodu, bloķējot kālija kanālus?",
        answers: ["Beta adrenoblokatori", "III klases antiaritmiskie līdzekļi", "Kalcija kanālu blokatori", "Membrānu stabilizatori"],
        correctIndex: 1
    },
    {
        question: "Kādu efektu uz EKG var izraisīt hinidīns?",
        answers: ["PR intervāla saīsināšana", "QT intervāla pagarināšana", "ST segmenta depresija", "QRS kompleksa saīsināšana"],
        correctIndex: 1
    },
    {
        question: "Kuras zāles lieto, lai samazinātu koronārās sirds slimības izraisītu trombembolijas risku?",
        answers: ["Klopidogrels", "Tikagrelors", "Aspirīns", "Visas minētās"],
        correctIndex: 3
    },
    {
        question: "Kas nosaka tiazīdu diurētiskā efekta 'plato'?",
        answers: ["Nātrija un hlora reabsorbcijas kavēšana", "Maksimāla diurēzes palielināšanās, neskatoties uz devas palielināšanu", "Kālija jonu aizture", "Aldosterona receptoru blokāde"],
        correctIndex: 1
    },
    {
        question: "Kuras zāles ir ieteicamas mirdzaritmijas ritma kontrolei bez strukturālas sirds slimības?",
        answers: ["Etacizīns", "Amiodarons", "Lidokaīns", "Sotalols"],
        correctIndex: 0
    },
    {
        question: "Kāds ir dabigatrāna darbības mehānisms?",
        answers: ["Tieša trombīna inhibīcija", "Netieša trombīna inhibīcija", "Antiagregantu receptoru blokāde", "K vitamīna inhibīcija"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles lieto pie refraktāras hipertensijas un metabola sindroma?",
        answers: ["Moksonidīns", "Nebivolols", "Spironolaktons", "Furosemīds"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles izraisa hiperkaliēmiju un ginekomastiju?",
        answers: ["Spironolaktons", "Hidrohlortiazīds", "Furosemīds", "Indapamīds"],
        correctIndex: 0
    },
    {
        question: "Kura medikamenta terapeitiskais efekts ir tieši saistīts ar CYP450 enzīmu metabolismu?",
        answers: ["Klopidogrels", "Dabigatrāns", "Tikagrelors", "Varfarīns"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles samazina perifēro asinsvadu pretestību bez būtiskas ietekmes uz sirds slodzi?",
        answers: ["ARB (angiotenzīna II receptoru blokatori)", "Beta adrenoblokatori", "Centrālas darbības antihipertensīvie līdzekļi", "AKE inhibitori"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles lieto akūtas miokarda infarkta izraisītas sirds mazspējas ārstēšanai?",
        answers: ["Eplerenons", "Amiodarons", "Furosemīds", "Bosentāns"],
        correctIndex: 0
    },
    {
        question: "Kura zāļu klase ietekmē sirds kontraktilitāti un automātismu, bloķējot beta-1 receptorus?",
        answers: ["Kalcija kanālu blokatori", "Beta adrenoblokatori", "ARB", "III klases antiaritmiskie līdzekļi"],
        correctIndex: 1
    },
    {
        question: "Kuras zāles lieto trombolīzei?",
        answers: ["Streptokināze", "Tikagrelors", "Dabigatrāns", "Varfarīns"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles ir piemērotas glaukomas ārstēšanai, samazinot intraokulārā šķidruma veidošanos?",
        answers: ["Dorzolamīds", "Mannitols", "Furosemīds", "Indapamīds"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles pagarina QT intervālu un var izraisīt 'torsades de pointes'?",
        answers: ["Amiodarons", "Hinidīns", "Sotalols", "Visas iepriekš minētās"],
        correctIndex: 3
    },
    {
        question: "Kuras zāles samazina aldosterona sekrēciju, bloķējot angiotenzīna II receptorus?",
        answers: ["Losartāns", "Enalaprils", "Aliskirēns", "Klonidīns"],
        correctIndex: 0
    },
    {
        question: "Kāds ir evolokumaba darbības mehānisms?",
        answers: ["PCSK9 inhibīcija", "Statīnu metabolisma uzlabošana", "HMG-CoA reduktāzes inhibīcija", "Lipāzes aktivācija"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles lieto hipertensijas ārstēšanai grūtniecības laikā, neradot teratogēnu efektu?",
        answers: ["Metildopa", "Klonidīns", "Nifedipīns", "Visas iepriekš minētās"],
        correctIndex: 3
    },
    {
        question: "Kuras zāles inhibē L-tipa kalcija kanālus un samazina miokarda skābekļa patēriņu?",
        answers: ["Verapamils", "Amlodipīns", "Diltiazems", "Abas A un C"],
        correctIndex: 3
    },
    {
        question: "Kuras zāles ir selektīvs aldosterona antagonists un neizraisa ginekomastiju?",
        answers: ["Spironolaktons", "Eplerenons", "Indapamīds", "Hidrohlortiazīds"],
        correctIndex: 1
    },
    {
        question: "Kura zāļu klase ietekmē bradikinīna metabolismu, izraisot klepu kā blakni?",
        answers: ["AKE inhibitori", "ARB", "Renīna inhibitori", "Beta adrenoblokatori"],
        correctIndex: 0
    },
    {
        question: "Kura zāle ir efektīva diurētiskās rezistences gadījumā?",
        answers: ["Torasemīds", "Furosemīds", "Hidrohlortiazīds", "Spironolaktons"],
        correctIndex: 0
    },
    {
        question: "Kuras zāles lieto hipertensijas ārstēšanai pacientiem ar hronisku nieru slimību?",
        answers: ["AKE inhibitori", "ARB", "Abas iepriekš minētās", "Neviena no iepriekš minētajām"],
        correctIndex: 2
    },
    {
        question: "75.	Kuras zāles tiek lietotas miokarda infarkta sekundārai profilaksei kombinācijā ar klopidogrelu?",
        answers: ["Tikagrelors", "Varfarīns", "Aspirīns", "Amiodarons"],
        correctIndex: 2
    }
];


const testContainer = document.getElementById("test-container");

// Shuffle function to randomize array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Generate Test
function generateTest() {
    testContainer.innerHTML = ""; // Clear container

    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question-block");

        const questionText = document.createElement("p");
        questionText.classList.add("question");
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionText);

        const answersList = document.createElement("ul");
        answersList.classList.add("answers");

        q.answers.forEach((answer, answerIndex) => {
            const answerItem = document.createElement("li");
            answerItem.classList.add("answer");
            answerItem.textContent = answer;

            answerItem.addEventListener("click", () => {
                const feedback = document.createElement("p");
                feedback.classList.add("feedback");

                if (answerIndex === q.correctIndex) {
                    answerItem.classList.add("correct");
                } else {
                    answerItem.classList.add("incorrect");
                    feedback.textContent = `Jūsu atbilde ir nepareiza. Pareizā atbilde: ${q.answers[q.correctIndex]}`;
                    questionDiv.appendChild(feedback);
                }
                // Disable other options
                Array.from(answersList.children).forEach((child) => {
                    child.style.pointerEvents = "none";
                });
            });

            answersList.appendChild(answerItem);
        });

        questionDiv.appendChild(answersList);
        testContainer.appendChild(questionDiv);
    });

    // Add shuffle button
    const shuffleButton = document.createElement("button");
    shuffleButton.textContent = "Izmainīt jautājumu secību un sākt no jaunā";
    shuffleButton.classList.add("shuffle-button");

    shuffleButton.addEventListener("click", () => {
        shuffle(questions);
        generateTest(); // Regenerate the test
    });

    testContainer.appendChild(shuffleButton);
}

// Initial Test Generation
generateTest();
