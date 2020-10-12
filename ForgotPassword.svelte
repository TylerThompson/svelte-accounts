<script>
    import { Accounts } from "meteor/accounts-base";
    import { Meteor } from "meteor/meteor";
    import { error } from "./state";
    export let heading = "Forgot Password";
    export let emailPlaceholder = "Email";
    export let emailLabel = undefined;
    export let text = "Send Request";
    //
    let email = "";
    let isSent = false;
    function onSubmit() {
        Accounts.forgotPassword(
            {
                email,
            },
            (err) => {
                if (!err) {
                    isSent = true;
                    email = "";
                    return;
                }
                error.set(err.reason);
            }
        );
    }
</script>

{#if typeof heading !== 'undefined'}
    <h3>{heading}</h3>
{/if}

<form on:submit|preventDefault={onSubmit}>
    <div>
        <label>
            {emailLabel}
            <input
                placeholder={emailPlaceholder}
                type="email"
                bind:value={email} />
        </label>
    </div>
    <button>{text}</button>
</form>
