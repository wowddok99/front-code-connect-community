import LayOutHeader from "./header";
import LayOutFooter from "./footer";
import LayOutBanner from "./banner";

export default function LayOut(props){

    return (
        <div>
            <LayOutHeader/>
            <LayOutBanner/>
                {props.children}
            <LayOutFooter/>
        </div>
    )
}