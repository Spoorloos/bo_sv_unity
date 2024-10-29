export default function SignUp() {
    return (
        <main className="absolute px-8 py-3 inset-0 flex flex-col justify-center items-center gap-8">
            <h1 className="text-5xl font-bold font-kinetika">Inschrijven</h1>
            <form className="max-w-sm space-y-3" method="POST">
                <fieldset>
                    <legend className="text-xl font-thin block mb-1">Naam</legend>
                    <div className="flex flex-wrap gap-3">
                        <input className="text-field flex-1 basis-32 w-full" type="text" name="first_name" placeholder="Voornaam" required/>
                        <input className="text-field flex-1 basis-32 w-full" type="text" name="last_name" placeholder="Achternaam" required/>
                    </div>
                </fieldset>
                <div>
                    <label className="text-xl font-thin block mb-1" htmlFor="email">E-mail</label>
                    <input className="text-field w-full" type="email" name="email" id="email" placeholder="email@voorbeeld.nl" required/>
                </div>
                <div>
                    <label className="text-xl font-thin block mb-1" htmlFor="birthday">Geboortedag</label>
                    <input className="text-field w-full" type="date" name="birthday" id="birthday" defaultValue={new Date().toLocaleDateString("en-CA")} required/>
                </div>
                <div className="text-end">
                    <button className="accent-button rounded-lg" type="submit">Schrijf je in</button>
                </div>
            </form>
        </main>
    );
}