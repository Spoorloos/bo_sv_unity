export default function SignUp() {
    return (
        <main className="absolute px-8 py-3 inset-0 flex flex-col justify-center items-center">
            <h1 className="my-8 text-5xl font-bold font-kinetika">Inschrijven</h1>
            <form className="w-full max-w-sm space-y-3" action="/" method="POST">
                <fieldset>
                    <legend className="text-xl font-thin block mb-1">Naam</legend>
                    <div className="flex flex-wrap gap-3">
                        <input className="textfield flex-1 w-full min-w-[min(100%,9rem)]" type="text" name="first_name" placeholder="Voornaam" required/>
                        <input className="textfield flex-1 w-full min-w-[min(100%,9rem)]" type="text" name="last_name" placeholder="Achternaam" required/>
                    </div>
                </fieldset>
                <div>
                    <label className="text-xl font-thin block mb-1" htmlFor="email">E-mail</label>
                    <input className="textfield w-full" type="email" name="email" id="email" placeholder="email@voorbeeld.nl" required/>
                </div>
                <div>
                    <label className="text-xl font-thin block mb-1" htmlFor="birthday">Geboortedag</label>
                    <input className="textfield w-full" type="date" name="birthday" id="birthday" required/>
                </div>
                <div className="flex justify-end">
                    <button className="accent-button rounded-lg" type="submit">Schrijf je in</button>
                </div>
            </form>
        </main>
    );
}