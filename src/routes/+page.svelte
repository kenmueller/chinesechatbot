<script lang="ts">
	import { tick } from 'svelte'

	import getResponse from '$lib/getResponse'

	const suggestions = [
		'你好',
		'再见',
		'___是谁吗',
		'___多大了',
		'___的健康状况如何',
		'___有哪些症状',
		'我的症状是___',
		'有哪些___推荐'
	]

	interface Message {
		type: 'user' | 'bot'
		text: string
	}

	let messages: Message[] = []
	let newMessageText = ''

	let messagesElement: HTMLDivElement | null = null

	let inputElement: HTMLInputElement | null = null
	$: inputElement?.focus()

	const onSubmit = () => {
		messages.push(
			{ type: 'user', text: newMessageText },
			{ type: 'bot', text: getResponse(newMessageText) }
		)

		messages = messages
		newMessageText = ''

		inputElement?.focus()

		tick().then(() => {
			if (messagesElement) messagesElement.scrollTop = messagesElement.scrollHeight
		})
	}
</script>

<svelte:head>
	<title>Chinese Chatbot by Ken Mueller</title>
	<meta name="description" content="A chatbot that speaks Chinese written by Ken Mueller" />
</svelte:head>

<main>
	<h1>Chinese Chatbot by Ken Mueller</h1>
	<div class="main" bind:this={messagesElement}>
		{#if messages.length > 0}
			<div class="messages">
				{#each messages as message}
					<div class="message {message.type}">
						<p>{message.text}</p>
					</div>
				{/each}
			</div>
		{:else}
			<div class="suggestions-container">
				<h3>Some possible messages...</h3>
				<ul class="suggestions-list">
					{#each suggestions as suggestion}
						<li>{suggestion}</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
	<form on:submit|preventDefault={onSubmit}>
		<input bind:this={inputElement} placeholder="Message" bind:value={newMessageText} />
		<button disabled={!newMessageText}>Send</button>
	</form>
</main>

<style lang="scss">
	main {
		display: grid;
		grid-template-rows: auto 1fr auto;
		height: 100%;
	}

	h1 {
		padding: 1rem;
	}

	.main {
		overflow-y: auto;
	}

	.messages {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.message {
		padding: 1rem;
	}

	.suggestions-container {
		display: flex;
		align-items: stretch;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		opacity: 0.5;
	}

	.suggestions-list {
		padding-left: 1.5rem;
	}

	.bot {
		background: rgba(black, 0.05);
	}

	form {
		display: flex;
		align-items: stretch;
		padding: 1rem;
		gap: 0.5rem;
	}

	input,
	button {
		height: 40px;
		padding: 0 1rem;
		border-radius: 0.5rem;
	}

	input {
		flex-grow: 1;
		background: rgba(black, 0.05);
	}

	button {
		flex-shrink: 0;
		color: white;
		background: #007aff;
		transition: opacity 0.15s;

		&:disabled {
			opacity: 0.5;
		}
	}
</style>
