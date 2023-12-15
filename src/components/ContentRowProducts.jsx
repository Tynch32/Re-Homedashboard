import { ContentRowItem } from "./ContentRowItem"
export const ContentRowProducts = () => {
    
    return (
        <div className="row">
            {
                items.map(({id,title,value,color,icon})=><ContentRowItem key={id} title={title} value={value} color={color} icon={icon}/>)
            }
        </div>
    )
}
