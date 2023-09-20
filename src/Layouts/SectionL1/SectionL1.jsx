import './style.css'
import Title from '../../Components/Title/Title'
import Button from '../../Components/Button/Button'

const SectionL1 = () => {
    return (
        <div className="SectionL1">
            <article>
                <section>
                    <Title type={"box-primary-empty"} text={"TITULO BEM GRANDE"}/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, inventore magnam! Incidunt dignissimos minima recusandae.</p>
                    <Button type={"box-primary"} text={"Sign Up"}/>
                </section>

                <section>
                    <img src="https://www.30secondsofcode.org/assets/cover/coffee-phone-tray-2.webp" alt="" />
                </section>
            </article>
        </div>
    )
}
export default SectionL1