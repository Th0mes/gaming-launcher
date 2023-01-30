import { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { Layout } from '../components/Layout';

function App() {
	const [greetMsg, setGreetMsg] = useState('');
	const [name, setName] = useState('');

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
		setGreetMsg(await invoke('greet', { name }));
	}

	return (
		<Layout className="flex flex-1 items-center justify-center">
			<h1 className="text-2xl">hello world</h1>
		</Layout>
	);
}

export default App;
