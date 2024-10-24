export default function Signup() {
    return (
        <main className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="my-8 text-5xl font-bold font-kinetika">Inschrijven</h1>
            <form className="w-min space-y-3" action="/" method="POST">
                <div>
                    <label className="text-xl font-thin block mb-1" htmlFor="naam">Naam</label>
                    <div className="w-max space-x-3">
                        <input className="textfield" type="text" name="first_name" placeholder="Voornaam" required/>
                        <input className="textfield" type="text" name="last_name" placeholder="Achternaam" required/>
                    </div>
                </div>
                <div>
                    <label className="text-xl font-thin block mb-1" htmlFor="email">E-mail</label>
                    <input className="textfield w-full" type="email" name="email" placeholder="email@voorbeeld.nl" required/>
                </div>
                <div>
                    <label className="text-xl font-thin block mb-1" htmlFor="birthday">Geboortedag</label>
                    <input className="textfield w-full" type="date" name="birthday" required/>
                </div>
                <div className="flex justify-end">
                    <button className="accent-button rounded-lg" type="submit">Schrijf je in</button>
                </div>
            </form>
        </main>
    );
}