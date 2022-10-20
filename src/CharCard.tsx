import * as url from "url";
import {Character} from "./CharacterTyp";

export default function CharCard(props:{charecter :Character}){
    return<>
        {props.charecter.name}
        {props.charecter.image}
        {props.charecter.origin.name}
        {props.charecter.status}
        {props.charecter.location.url}
        <img src= {props.charecter.image} alt="Sailing boat" />

        </>

}