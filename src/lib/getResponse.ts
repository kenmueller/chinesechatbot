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

		if (/^ken's cat$/i.test(name)) {
			return "Ken's cat is named Haskell Mueller."
		}

		if (/^ken's (father|dad)$/i.test(name)) {
			return "Ken's father is named Scott Mueller."
		}

		return `Sorry, I do not know who ${name} is.`
	}

	return 'Sorry, I do not understand.'
}

export default getResponse
