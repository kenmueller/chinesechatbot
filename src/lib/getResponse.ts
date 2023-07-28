const getResponse = (message: string) => {
	// (hi|hello|hey|howdy)!?
	// Nǐ hǎo
	const hiMatch = message.match(/^你好$/i)

	if (hiMatch) {
		// Hello! I am a chatbot made by Ken.
		// Nǐ hǎo! Wǒ shì Ken zhìzuò de liáotiān jīqìrén.
		return '你好！我是 Ken 制作的聊天机器人。'
	}

	// (bye|goodbye)!?
	// Zàijiàn
	const byeMatch = message.match(/^再见$/i)

	if (byeMatch) {
		// Goodbye!
		// Zàijiàn
		return '再见'
	}

	// who is (.+?)\??
	// (.+?) shì shéi ma
	const whoIsMatch = message.match(/(.+?)是谁吗$/i)

	if (whoIsMatch) {
		const name = whoIsMatch[1]

		// if (/^in ken's family$/i.test(name)) {
		// 	return 'Ken has a father, a mother, a sister, and a cat.'
		// }

		if (/^(ken|ken mueller)$/i.test(name)) {
			return "Ken's full name is Ken Mueller."
		}

		// ken's (father|dad)
		// Kěn de bàba
		if (/^ken的爸爸$/i.test(name)) {
			// Ken's father is named Scott Mueller.
			// Ken de bàba jiào Scott Mueller.
			return 'Ken的爸爸叫Scott Mueller'
		}

		if (/^ken's (mother|mom)$/i.test(name)) {
			return "Ken's mother is named Antoaneta Mueller."
		}

		if (/^ken's sister$/i.test(name)) {
			return "Ken's sister is named Margo Mueller."
		}

		if (/^ken's cat$/i.test(name)) {
			return "Ken's cat is named Haskell Mueller."
		}

		if (/^(scott|scott mueller)$/i.test(name)) {
			return "Scott Mueller is Ken's father."
		}

		if (/^(antoaneta|antoaneta mueller)$/i.test(name)) {
			return "Antoaneta Mueller is Ken's mother."
		}

		if (/^(margo|margo mueller)$/i.test(name)) {
			return "Margo Mueller is Ken's sister."
		}

		if (/^(haskell|haskell mueller)$/i.test(name)) {
			return "Haskell Mueller is Ken's cat."
		}

		return `Sorry, I do not know who ${name} is.`
	}

	const howOldIsMatch = message.match(/how old is (.+?)\??$/i)

	if (howOldIsMatch) {
		const name = howOldIsMatch[1]

		if (/^(ken|ken mueller)$/i.test(name)) {
			return 'Ken Mueller is 17 years old.'
		}

		if (/^(ken's (father|dad)|scott|scott mueller)$/i.test(name)) {
			return 'Scott Mueller is 47 years old.'
		}

		if (/^(ken's (mother|mom)|antoaneta|antoaneta mueller)$/i.test(name)) {
			return 'Antoaneta Mueller is 47 years old.'
		}

		if (/^(ken's sister|margo|margo mueller)$/i.test(name)) {
			return 'Margo Mueller is 15 years old.'
		}

		if (/^(ken's cat|haskell|haskell mueller)$/i.test(name)) {
			return 'Haskell Mueller is 6 years old.'
		}

		return `Sorry, I do not know how old ${name} is.`
	}

	const howIsHealthMatch = message.match(/how is (.+?)'s health\??$/i)

	if (howIsHealthMatch) {
		const name = howIsHealthMatch[1]

		if (/^(ken|ken mueller)$/i.test(name)) {
			return "Ken's health is good."
		}

		if (/^(ken's (father|dad)|scott|scott mueller)$/i.test(name)) {
			return "Scott Mueller's health is good."
		}

		if (/^(ken's (mother|mom)|antoaneta|antoaneta mueller)$/i.test(name)) {
			return "Antoaneta Mueller's health is good."
		}

		if (/^(ken's sister|margo|margo mueller)$/i.test(name)) {
			return "Margo Mueller's health is good."
		}

		if (/^(ken's cat|haskell|haskell mueller)$/i.test(name)) {
			return "Haskell Mueller's health is good."
		}

		return `Sorry, I do not know how ${name}'s health is.`
	}

	const mainSymptomMatch = message.match(/what is the main symptom of (.+?)\??$/i)

	if (mainSymptomMatch) {
		const disease = mainSymptomMatch[1]

		if (/^(covid|covid 19|covid-19)$/i.test(disease)) {
			return 'The main symptom of COVID-19 is difficulty breathing.'
		}

		if (/^(cold|a cold)$/i.test(disease)) {
			return 'The main symptom of a cold is a runny nose.'
		}

		if (/^(fever|a fever)$/i.test(disease)) {
			return 'The main symptom of a fever is chills.'
		}

		return `Sorry, I do not know what the main symptom of ${disease} is.`
	}

	const symptomsMatch = message.match(/what are the symptoms of (.+?)\??$/i)

	if (symptomsMatch) {
		const disease = symptomsMatch[1]

		if (/^(covid|covid 19|covid-19)$/i.test(disease)) {
			return 'The symptoms of COVID-19 are Fever or chills, Cough, Shortness of breath or difficulty breathing, Fatigue, Muscle or body aches, Headache, New loss of taste or smell, Sore throat, Congestion or runny nose, Nausea or vomiting, Diarrhea.'
		}

		if (/^(cold|a cold)$/i.test(disease)) {
			return 'The symptoms of a cold are Sneezing, Stuffy nose, Runny nose, Sore throat, Coughing, Mucus dripping down your throat (post-nasal drip), Watery eyes.'
		}

		if (/^(fever|a fever)$/i.test(disease)) {
			return 'The symptoms of a fever are Sweating, Chills and shivering, Headache, Muscle aches, Loss of appetite, Irritability, Dehydration, General weakness.'
		}

		return `Sorry, I do not know what the symptoms of ${disease} are.`
	}

	const mySymptomMatch = message.match(/my symptom is (.+?)(?:, what disease do i have)?\??$/i)

	if (mySymptomMatch) {
		const symptom = mySymptomMatch[1]

		if (
			/^(sneezing|suffy nose|runny nose|sore throat|coughing|post-nasal drip|watery eyes)$/i.test(
				symptom
			)
		) {
			return 'You probably have a cold.'
		}

		if (
			/^(sweating|chills|shivering|headache|muscle aches|loss of appetite|irritability|dehydration|general weakness|weakness)$/i.test(
				symptom
			)
		) {
			return 'You probably have a fever.'
		}

		if (
			/^(fever|chills|shortness of breath|difficulty breathing|fatigue|muscle aches|body aches|headache|loss of taste|loss of smell|sore throat|congestion|runny nose|nausea or vomiting|diarrhea)$/i.test(
				symptom
			)
		) {
			return 'You probably have COVID-19.'
		}

		return 'Sorry, I do not know what disease you have.'
	}

	const foodRecommendationsMatch = message.match(/what are some (.+?) food recommendations\??$/i)

	if (foodRecommendationsMatch) {
		const culture = foodRecommendationsMatch[1]

		if (/^chinese$/i.test(culture)) {
			return 'My favorite Chinese foods are orange chicken and dumplings.'
		}

		if (/^american$/i.test(culture)) {
			return 'My favorite American foods are hamburgers and fries.'
		}

		return `Sorry, I do not have any ${culture} food recommendations.`
	}

	return 'Sorry, I do not understand.'
}

export default getResponse
