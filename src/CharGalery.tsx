import CharCard from "./CharCard";
import {Character} from "./CharacterTyp";

export default function CharGalery (props: { charecterList: Character[]}){
    return <>
        <div>
            {props.charecterList.map(elem => <CharCard charecter={elem}></CharCard> )}
        </div>

    </>
}