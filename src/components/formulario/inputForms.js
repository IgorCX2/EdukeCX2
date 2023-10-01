export default function InputFunction({ nome, tipo, estilo, completar, placeholder, value, onChange }) {
    return (
      <input
        className={`w-full border rounded-lg outline-gray-800 p-2 py-3 mb-2 ${estilo}`}
        type={tipo}
        name={nome}
        placeholder={placeholder}
        autoComplete={completar}
        value={value}
        onChange={onChange}
      />
    );
  }