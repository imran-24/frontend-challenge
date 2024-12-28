import { menu } from "../../../libs/utils"
import MenuItem from "./menu-item"

const Foods = () => {
  return (
    <div className="flex flex-col gap-4">
        {
            menu.map((item, index) => (
                <MenuItem item={item} key={index}  />
            ))
        }
    </div>
  )
}

export default Foods