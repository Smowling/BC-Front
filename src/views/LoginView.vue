<template>
	<div class="inputContainer">
		<label for="email"> Email: </label>
		<input type="email" id="email" v-model="email">
	</div>
	<div class="buttonContainer">
		<button @click="login"> Login </button>
		<Logout />
		<button @click="login_google"> Login with google </button>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from '../lib/supabaseClient';
import Logout from '../components/Logout.vue'

let email = ref("");
let password = ref("");
let firstName = ref("");

async function createAccount() {
	const { user, error } = await supabase.auth.signUp({
		email: email.value,
		password: password.value,
		options: {
			data: {
				first_name: firstName.value
			}
		}
	})
	if (error)
	{
		console.log(error);
	}
	else
	{
		console.log(user);
	}
}

async function login() {
	console.log("run")
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email.value,
		password: password.value
	})
	if (error)
	{
		console.log(error);
	}
	else
	{
		console.log(data);
	}
}

async function login_google() {
	console.log("google login")
	const { data, error } = await supabase.auth.signInWithOAuth({
  		provider: 'google',
	})
	if (error)
	{
		console.log(error);
	}
	else
	{
		console.log(data);
	}
}

async function seeUser() {
	const localUser = await supabase.auth.getSession();
	console.log(localUser.data.session)
}

</script>

<style scoped>
.inputContainer {
	display: flex;
	flex-direction: column;
}

input {
	font-size: 1.5em;
}
.buttonContainer {
	display: flex;
	flex-direction: column;
	margin-top: 1em;
}

button {
	margin-bottom: 1em;
	padding: 1em 2em 1em 2em;
}
</style>