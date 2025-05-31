"use client";

export default function LoginPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="relative w-full h-screen">
      {/* Arka plan resmi */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: "url('/kayra.jpg')" }}
      />
      {/* İçerik */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-[#eef5e2] flex flex-col items-center rounded p-8 shadow gap-y-8 w-1/4">
          <img src="/logo.png" alt="logo" />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-4 w-full max-w-sm"
          >
              <input
                type="text"
                name="username"
                className="block w-full mt-1 py-2 border-b focus:outline-none"
                placeholder="Kullanıcı Adı"
              />
              <input
                type="password"
                name="password"
                className="block w-full mt-1 py-2 border-b focus:outline-none"
                placeholder="Parola"
              />
            <button
              type="submit"
              className="w-full bg-[#E0A800] text-white py-2 rounded hover:cursor-pointer transition duration-300 hover:bg-[#d18f00] mt-8"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
