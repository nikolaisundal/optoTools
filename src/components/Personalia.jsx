export default function Personalia({
  personalia: { address, name, birthDate, postCode },
}) {
  return (
    <div className="flex min-w-[16rem] w-full overflow-hidden  p-4">
      <div className="flex flex-col w-3/5 ">
        <span className="text-black ">
          <b>Navn:</b> {name}
        </span>
        <span className="text-black mt-3 ">
          <b>Fødselsdato</b>: {birthDate}
        </span>
      </div>
      <div className="flex flex-col  w-2/5  ">
        <span className="text-black ">
          <b>Adresse:</b> {address}
        </span>
        <span className="text-black mt-3">
          <b>Poststed:</b> {postCode}
        </span>
      </div>
    </div>
  );
}
