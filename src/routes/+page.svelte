<script lang="ts">
	import { tick } from 'svelte'

	import getResponse from '$lib/getResponse'

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

<main>
	<h1>Chinese Chatbot</h1>
	<div class="messages" bind:this={messagesElement}>
		{#each messages as message}
			<div class="message {message.type}">
				<p>{message.text}</p>
			</div>
		{/each}
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

	.messages {
		overflow-y: auto;
	}

	.message {
		padding: 1rem;
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
