<script>
    import Login from "./Login.svelte";
    import Signup from "./Signup.svelte";
    import ForgotPassword from "./ForgotPassword.svelte";
    import { error } from "./state";
    let loginHeading = "Login";
    let signupHeading = "Sign Up";
    let windowType = "LOGIN";
    // Login
    let loginEmailLabel = undefined;
    let loginEmailPlaceholder = "Email";
    let loginPasswordLabel = undefined;
    let loginPasswordPlaceholder = "Password";
    let LoginButtonText = "Login";
    // Sign up
    let signUpEmailLabel = undefined;
    let signUpEmailPlaceholder = "Email";
    let signUpPasswordLabel = undefined;
    let signUpPasswordPlaceholder = "Password";
    let signUpButtonText = "Sign up";
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
    <ForgotPassword />
    <p>
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
