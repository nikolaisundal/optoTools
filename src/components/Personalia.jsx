export default function Personalia({
  personalia: { address, name, birthDate, postCode },
}) {
  return (
    <div className="flex flex-col min-w-[16rem] w-fit overflow-hidden border border-black p-4">
      <span className="text-black">
        <b>Navn:</b> {name}
      </span>
      <span className="text-black mt-2">
        <b>Fødselsdato</b>: {birthDate}
      </span>
      <span className="text-black mt-2">
        <b>Adresse:</b> {address}
      </span>
      <span className="text-black mt-2">
        <b>Poststed:</b> {postCode}
      </span>
    </div>
  );
}
