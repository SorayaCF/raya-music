
export default function Contact() {
  return (
    <div className="py-16 px-6 bg-gray-100 text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-8">Contacta-nos</h2>
      <form className="max-w-md mx-auto space-y-4" action="https://formsubmit.co/sorayacantos@gmail.com" method="POST" onsubmit="return false;">
        <div>
          <label className="block text-sm font-medium" htmlFor="name">Nombre</label>
          <input type="text" name="name" required className="w-full px-4 py-2 bg-gray-200 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="email">Email</label>
          <input type="email" name="email" required className="w-full px-4 py-2 bg-gray-200 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="message">Mensaje</label>
          <textarea name="message" required rows="4" className="w-full px-4 py-2 bg-gray-200 rounded-lg"></textarea>
        </div>
        <input type="hidden" name="_subject" value="Mensaje nuevo!"></input>
        <button type='submit' className="bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 from-pink-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg flex gap-2 items-center">
          <div>Enviar</div>
        </button>
      </form>
    </div>
  );
}