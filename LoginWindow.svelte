<script>
    import Login from "./Login.svelte";
    import Signup from "./Signup.svelte";
    import ForgotPassword from "./ForgotPassword.svelte";
    import { error } from "./state";
    export let loginHeading = "Login";
    export let signupHeading = "Sign Up";
    export let windowType = "LOGIN";
    // Login
    export let loginEmailLabel = undefined;
    export let loginEmailPlaceholder = "Email";
    export let loginPasswordLabel = undefined;
    export let loginPasswordPlaceholder = "Password";
    export let LoginButtonText = "Login";
    // Sign up
    export let signUpEmailLabel = undefined;
    export let signUpEmailPlaceholder = "Email";
    export let signUpPasswordLabel = undefined;
    export let signUpPasswordPlaceholder = "Password";
    export let signUpButtonText = "Sign up";
    // Forgot
    export let forgotHeading = "";
    export let forgotEmailLabel = undefined;
    export let forgotEmailPlaceholder = "Email";
</script>

<style>
    .error {
        color: red;
    }
</style>

{#if windowType === 'LOGIN'}
    <Login
        heading={loginHeading}
        emailLabel={loginEmailLabel}
        emailPlaceholder={loginEmailPlaceholder}
        passwordLabel={loginPasswordLabel}
        passwordPlaceholder={loginPasswordPlaceholder}
        text={LoginButtonText} />
    <p>
        Don't have an account?
        <button
            on:click={() => {
                windowType = 'SIGNUP';
            }}>
            Sign up here
        </button>
    </p>
{:else if windowType === 'SIGNUP'}
    <Signup
        heading={signupHeading}
        emailLabel={signUpEmailLabel}
        emailPlaceholder={signUpEmailPlaceholder}
        passwordLabel={signUpPasswordLabel}
        passwordPlaceholder={signUpPasswordPlaceholder}
        text={signUpButtonText} />
    <p>
        Already have an account?
        <button
            on:click={() => {
                windowType = 'LOGIN';
            }}>
            Log in here
        </button>
    </p>
{:else}
    <ForgotPassword
        heading={forgotHeading}
        emailLabel={forgotEmailLabel}
        emailPlaceholder={forgotEmailPlaceholder} />
    <p class="forgot-password-switch">
        I know my password
        <button
            on:click={() => {
                windowType = 'LOGIN';
            }}>
            Login
        </button>
    </p>
{/if}

{#if $error}
    <p class="error">{$error}</p>
{/if}

<button
    on:click={() => {
        windowType = 'FORGOT_PASSWORD';
    }}>
    Forgot Password
</button>
