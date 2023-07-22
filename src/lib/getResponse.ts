const getResponse = (message: string) => {
	const hiMatch = message.match(/^(hi|hello|hey|howdy)$/i)

	if (hiMatch) {
		return 'Hello! I am a chatbot made by Ken.'
	}

	const byeMatch = message.match(/^(bye|goodbye)$/i)

	if (byeMatch) {
		return 'Goodbye!'
	}

	const whoIsMatch = message.match(/who is (.+?)\??$/i)

	if (whoIsMatch) {
		const name = whoIsMatch[1]

		if (/^in ken's family$/i.test(name)) {
			return 'Ken has a father, a mother, and a cat.'
		}

		if (/^(ken|ken mueller)$/i.test(name)) {
			return "Ken's full name is Ken Mueller."
		}

		if (/^ken's (father|dad)$/i.test(name)) {
			return "Ken's father is named Scott Mueller."
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

	return 'Sorry, I do not understand.'
}

export default getResponse
