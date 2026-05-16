import LocCard from "./LocCard"

export default function GridLocCards(){
    return(
        <div className= "grid grid-cols-2 sm:grid-cols-3">
            <LocCard></LocCard>
            <LocCard></LocCard>
            <LocCard></LocCard>
            <LocCard></LocCard>
        </div>
    )
}