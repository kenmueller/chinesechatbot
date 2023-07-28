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
					<li>Hello</li>
					<li>Goodbye</li>
					<li>Who is in Ken's family?</li>
					<li>Who is ...?</li>
					<li>How old is ...?</li>
					<li>How is ...'s health?</li>
					<li>What is the main symptom of ...?</li>
					<li>What are the symptoms of ...?</li>
					<li>My symptom is ...</li>
					<li>My symptom is ..., what disease do I have?</li>
					<li>What some ... food recommendations?</li>
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
