import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from "enzyme";
import {Dropdown} from "../Dropdown";

describe('Dropdown', () => {
    configure({adapter: new Adapter()});
    test('should render', () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />}/>)
        expect(wrapper).toBeDefined()
        expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy()
    })
    test('should render (snapshot)', () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />}/>)
        expect(wrapper).toMatchSnapshot()
    })
})
