
interface Props {
  name: string
  description: string
}

export const HeaderPage = ({ name, description }: Props) => {
  return (
    <div className="flex justify-center my-6">
      <div className="bg-white text-black py-1 shadow text-2xl text-center border rounded w-2/4">
        <div className="flex flex-col">
          <span>{name}</span>
          <small className="text-black/50">({description})</small>
        </div>
      </div>
    </div>
  )
}
