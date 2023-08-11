const getResponse = (message: string) => {
	// (hi|hello|hey|howdy)!?
	// Nǐ hǎo
	const hiMatch = message.match(/^你好$/i)

	if (hiMatch) {
		// Hello! I am a chatbot made by Ken.
		// Nǐ hǎo! Wǒ shì Ken zhìzuò de liáotiān jīqìrén.
		return '你好！我是Ken制作的聊天机器人。'
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
			// Ken's full name is Ken Mueller.
			// Ken jiào Ken Mueller.
			return 'Ken叫Ken Mueller.'
		}

		// ken's (father|dad)
		// Ken de bàba
		if (/^ken的爸爸$/i.test(name)) {
			// Ken's father is named Scott Mueller.
			// Ken de bàba jiào Scott Mueller.
			return 'Ken的爸爸叫Scott Mueller.'
		}

		if (/^ken的妈妈$/i.test(name)) {
			// Ken's mother is named Antoaneta Mueller.
			// Ken de māmā jiào Antoaneta Mueller.
			return 'Ken的妈妈叫Antoaneta Mueller.'
		}

		// ken's sister
		// Ken de meimei
		if (/^ken的妹妹$/i.test(name)) {
			return 'Ken的妹妹叫Margo Mueller.'
		}

		if (/^ken的猫$/i.test(name)) {
			return 'Ken的猫叫Haskell Mueller.'
		}

		if (/^(scott|scott mueller)$/i.test(name)) {
			return 'Scott Mueller是Ken的爸爸.'
		}

		if (/^(antoaneta|antoaneta mueller)$/i.test(name)) {
			return 'Antoaneta Mueller是Ken的妈妈.'
		}

		if (/^(margo|margo mueller)$/i.test(name)) {
			return 'Margo Mueller是Ken的妹妹.'
		}

		if (/^(haskell|haskell mueller)$/i.test(name)) {
			return 'Haskell Mueller是Ken的猫.'
		}

		return `抱歉，我不知道${name}是谁`
	}

	const howOldIsMatch = message.match(/(.+?)多大了\??$/i)

	if (howOldIsMatch) {
		const name = howOldIsMatch[1]

		if (/^(ken|ken mueller)$/i.test(name)) {
			return 'Ken Mueller十七岁了'
		}

		if (/^(ken的爸爸|scott|scott mueller)$/i.test(name)) {
			return 'Scott Mueller四十七岁了'
		}

		if (/^(ken的妈妈|antoaneta|antoaneta mueller)$/i.test(name)) {
			return 'Antoaneta Mueller四十七岁了'
		}

		if (/^(ken的妹妹|margo|margo mueller)$/i.test(name)) {
			return 'Margo Mueller十五岁了'
		}

		if (/^(ken的猫|haskell|haskell mueller)$/i.test(name)) {
			return 'Haskell Mueller六岁了'
		}

		return `抱歉，我不知道${name}多大了`
	}

	const howIsHealthMatch = message.match(/(.+?)的健康状况如何\??$/i)

	if (howIsHealthMatch) {
		const name = howIsHealthMatch[1]

		if (/^(ken|ken mueller)$/i.test(name)) {
			return 'Ken的​​健康状况良好'
		}

		if (/^(ken的爸爸|scott|scott mueller)$/i.test(name)) {
			return 'Scott Mueller的​​健康状况良好'
		}

		if (/^(ken的妈妈|antoaneta|antoaneta mueller)$/i.test(name)) {
			return 'Antoaneta Mueller的​​健康状况良好'
		}

		if (/^(ken的妹妹|margo|margo mueller)$/i.test(name)) {
			return 'Margo Mueller的​​健康状况良好'
		}

		if (/^(ken的猫|haskell|haskell mueller)$/i.test(name)) {
			return 'Haskell Mueller的​​健康状况良好'
		}

		return `抱歉，我不知道${name}的健康状况如何`
	}

	const symptomsMatch = message.match(/(.+?)有哪些症状\??$/i)

	if (symptomsMatch) {
		const disease = symptomsMatch[1]

		if (/^(covid|covid 19|covid-19)$/i.test(disease)) {
			return 'COVID-19的症状有发烧或者发冷，咳嗽，气短或者 呼吸困难，疲劳，肌肉酸痛，头痛，味觉或 嗅觉失灵，喉咙痛，拥塞或流鼻涕，恶心或呕吐，拉肚子'
		}

		if (/^感冒$/i.test(disease)) {
			return '感冒的症状有打喷嚏、鼻塞、流鼻涕、喉咙痛、咳嗽、鼻后滴漏、流泪'
		}

		if (/^水痘$/i.test(disease)) {
			return '水痘的症状是发烧、食欲不振、头痛、疲倦'
		}

		return `抱歉，我不知道${disease}的症状是什么`
	}

	const mySymptomsMatch = message.match(/我的症状是(.+?)$/i)

	if (mySymptomsMatch) {
		const symptoms = mySymptomsMatch[1].split('、')

		const symptomsMatch = {
			'covid-19':
				'发烧或者发冷，咳嗽，气短或者 呼吸困难，疲劳，肌肉酸痛，头痛，味觉或 嗅觉失灵，喉咙痛，拥塞或流鼻涕，恶心或呕吐，拉肚子'.split(
					'、'
				),
			感冒: '打喷嚏、鼻塞、流鼻涕、喉咙痛、咳嗽、粘液从喉咙滴下来（鼻后滴漏）、流泪'.split('、'),
			水痘: '发烧、食欲不振、头痛、疲倦'.split('、')
		}

		let disease: string | null = null
		let matchCount = 0

		for (const [thisDisease, thisSymptoms] of Object.entries(symptomsMatch)) {
			const thisMatchCount = symptoms.reduce(
				(count, symptom) => count + (thisSymptoms.includes(symptom) ? 1 : 0),
				0
			)

			if (thisMatchCount > matchCount) {
				disease = thisDisease
				matchCount = thisMatchCount
			}
		}

		return disease ? `您可能感染了${disease}` : '抱歉，我不知道你得的是什么病'
	}

	const foodRecommendationsMatch = message.match(/有哪些(.+?)推荐$/i)

	if (foodRecommendationsMatch) {
		const culture = foodRecommendationsMatch[1]

		if (/^中餐$/i.test(culture)) {
			return '我最喜欢的中国菜是橙子鸡和饺子'
		}

		if (/^美国食物$/i.test(culture)) {
			return '我最喜欢的美国食物是汉堡包和薯条'
		}

		return `抱歉，我没有任何${culture}食物推荐`
	}

	return '对不起，我不明白'
}

export default getResponse
