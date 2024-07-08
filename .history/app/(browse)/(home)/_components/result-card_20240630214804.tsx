import { Stream, User } from "@prisma/client";

interface ResultCardProps {

    stream : (Stream & { user : User})

}

export const ResultCard : React.FC<ResultCardProps> = ({stream})=>{

    return <div>{stream.name}</div>
}