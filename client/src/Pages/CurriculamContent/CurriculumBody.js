import starPoint from "../../img/icons/starPoint.webp"
import psed from '../../img/curriculum/psed.webp'
import cal from '../../img/curriculum/cal.webp'
import pd from '../../img/curriculum/pd.webp'
import Literacy from '../../img/curriculum/Literacy.webp'
import math from '../../img/curriculum/math.webp'
import utw from '../../img/curriculum/utw.webp'
import ead from '../../img/curriculum/ead.webp'
import socialStudy from '../../img/curriculum/socialStudy.webp'
import stem from '../../img/curriculum/stem.webp'
import last from '../../img/curriculum/last.webp'


const CurriculumBody = () => {
    return (
        <>
            <section className="container-fluid p-0">
                <div className="curriculumBodyBg">
                    <div className="curriculumEffect1"></div>
                    <div className="curriculumEffect2"></div>
                    <div className="curriculumEffect3"></div>
                    <div className="curriculumEffect4"></div>
                    <div className="curriculumEffect5"></div>
                    <div className="curriculumEffect6"></div>
                    <div className="curriculumEffect7"></div>
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="myChlidContent">
                                    <p>Little Lambs Nursery is aimed at supporting the learning and development of children from 45 days to 5 years through Early years foundation stage curriculum. The curriculum sets out developmental milestones using a holistic approach in seven areas of learning and development. The four guiding principles that the practitioners will adhere to are</p>
                                    <div className="differenceBodyCard">
                                        <ul>
                                            <li>
                                                <b>A Unique Child:</b> Every child is a unique child who is constantly learning and can be resilient, capable, confident and self-assured.
                                            </li>
                                            <li> Children learn to be strong and independent through positive relationships</li>
                                            <li>Children learn and develop well in enabling environments with teaching and support from adults, who respond to their individual interests and needs and help them to build their learning over time. Children benefit from a strong partnership between practitioners and parents and/or carers. Environment is the third teacher for a child, the others being Parents and the school teacher respectively.</li>
                                            <li>Importance of learning and development. Children develop and learn at different rates</li>
                                        </ul>
                                    </div>
                                    <p className="mt-5">Little Lambs Nursery (LLN) will use seven areas of EYFS as the basis for their planning.</p>
                                    <p className="mt-5">Besides the seven areas Little Lambs Nursery will focus on enhancing the understanding and civic awareness and pride of children through social studies; and teach the children the skills they would need for future through Information technology/STEM incorporated in the curriculum.</p>

                                    <div className="currculumPageImg">
                                        <img src={psed} alt="psed" className="img-fluid" />
                                        <h2>(PSED) <br />
                                            Personal, Social and Emotional Development</h2>

                                        <p>Little Lambs Nursery will focus on children's mental and physical wellbeing. Children will work on long-term skills to build a healthy foundation that they can take forward. They will develop/improve Self-Regulation; Managing Self; Building Relationships. Little Lambs Nursery will provide children with lots of social opportunities. Children can learn to form healthy bonds and make stable, lasting friendships. They’ll learn what is right and what is wrong, alongside respect and compassion. Children will develop independence and self-esteem. They will learn to play with other children ad Little Lambs Nursery will assess the children on the stage of play they are in and be a facilitator to overcome the stage wherever possible.</p>

                                    </div>



                                    <div className="currculumPageImg">
                                        <img src={cal} alt="cal" className="img-fluid" />
                                        <h4 className="curriculumTitle blue">Communication and Language </h4>
                                        <p>Little Lambs Nursery will provide opportunities to children to improve spoken language skills so that they are able to interact with their peers and their learning environment. Little Lambs Nursery will focus on the essential areas of communication and language -Listening, Attention and Understanding; Speaking. Children will learn variety of ways to take in information, and communicate information. They will learn to associate words and image so that there is language and communication development. Children will read lots of books so that they are able to make a connection with the pictures in the book, and the text they’re reading out. Lots of activities to improve communication and language of children will be conducted in the nursery like role play, storytelling, show & tell, group games, discussions, poetry recitation, events, drama, etc</p>
                                    </div>

                                    <div className="currculumPageImg">
                                        <img src={pd} alt="pd" className="img-fluid" />
                                        <h4 className="curriculumTitle pink"> Physical Development</h4>
                                        <p>Little Lambs Nursery will provide opportunities to develop both gross and fine motor skills with the help of activities like writing and cutting; movement of children so that they explore the world around them through handling objects. Children will be encouraged to follow healthy eating and lead an active lifestyle. Little Lambs Nursery will provide regular physical activity in the setting; promote healthy development, growth, composition, and cardiovascular fitness. Children will be taught to   control and manage their body movements finally leading to improvement in brain development such as critical thinking skills and concentration. Activities to promote gross motor skills include participation in the garden & road track area, where they are running; jumping; hopping; skipping; riding tricycles; throwing & catching balls & bean bags and watering plants. More opportunities to have gym sessions and other extra-curricular activities like karate, football etc will be provided. Fine motor skills are encouraged using a variety of resources including play-dough; paint; crayons; scissors; beads & puzzles; lacing activities; cutting & sticking; tracing and scribbling etc.</p>
                                    </div>

                                    <div className="currculumPageImg">
                                        <img src={Literacy} alt="Literacy" className="img-fluid" />
                                        <h4 className="curriculumTitle blue">Literacy </h4>
                                        <p>Little Lambs Nursery will provide support to the children in the areas of Comprehension; Word Reading; Writing. Children will begin to build connections between spoken sounds and the letters in writing. Little Lambs Nursery will provide loads of experience with letters and words, pictures and objects, and sounds. Children will get lots of opportunities to communicate through written language. The essential part of learning in Literacy would start with pre-writing skill improvement and jolly phonics. Little Lambs Nursery will follow the Oxford reading tree with different levels of color bands and track the records of reading of each child. Children will be assessed on the stages of writing and stages of reading; and teachers will support/facilitate each child to achieve success at each level and move to the next.</p>
                                    </div>

                                    <div className="currculumPageImg">
                                        <img src={math} alt="math" className="img-fluid" />
                                        <h4 className="curriculumTitle pink">Mathematics </h4>
                                        <p>Little Lambs Nursery will focus on the maths areas: Number and Numerical Patterns. This will support children with life skills such as spatial awareness, shapes and measurement, and problem-solving. Children will be able to handle and manage money, tell time, work out distance and time together, so that they can travel. Activities that improve mathematical thinking are: jig saw puzzle, threading, lacing, play dough, counting, sand, water, cookery, role play, road track and construction areas. Children use numbers in play and learn to solve problems of addition and subtraction. They will be assessed for their mathematical skills and maths will be used in every possible way to help children develop interest in numbers and learn the mathematical concepts easily.</p>
                                    </div>

                                    <div className="currculumPageImg">
                                        <img src={utw} alt="utw" className="img-fluid" />
                                        <h4 className="curriculumTitle blue"><span>(UTW) </span> <br />Understanding the World</h4>
                                        <p>Little Lambs Nursery will support children's learning about the surrounding environment. Children explore new cultures and better understand basics that we often take for granted like- Past and Present;  People, Culture, and Communities; The Natural World. Children learn how and why certain things happen within the world around them; discover similarities and differences; what they can and cannot change, and why. Little Lambs Nursery will provide lots of opportunities to experiment and investigate. Children learn to make observations and form their own opinions and theories. Children learn about the environment, such as weather conditions, plants, and wildlife. Little Lambs Nursery will help them to use a variety of tools and techniques to assemble materials creatively and safely. They will also develop an understanding of technology through using programmable toys and the computer</p>
                                    </div>

                                    <div className="currculumPageImg">
                                        <img src={ead} alt="ead" className="img-fluid" />
                                        <h4 className="curriculumTitle pink"><span>(EAD)</span> <br /> Expressive Arts and Design</h4>
                                        <p>Little Lambs Nursery will support children's creative development and expression. It helps children create their own art works and encourages them to value their own thoughts, opinions and skills. The two areas in this area of learning are-</p>
                                        <div className="differenceBodyCard">
                                            <ul>
                                                <li>
                                                    Creating with Materials
                                                </li>
                                                <li>
                                                    Being Imaginative and Expressive
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Little Lambs Nursery will provide lots of opportunities in this to develop emotive sharing. Children learn to use a range of materials and activities in order to express themselves through imaginative play. These activities include design and technology, dance, movement, music, art, and role-play. Children learn to work and explore different colors, textures, shapes, space and forms. Children will develop their imagination through stories and wide variety of activities in LLN.</p>
                                    </div>

                                    <div className="currculumPageImg">
                                        <img src={socialStudy} alt="socialStudy" className="img-fluid" />
                                        <h4 className="curriculumTitle blue">Social studies</h4>
                                        <p>Little Lambs Nursery will make children study people how they relate to each other and focus on self-development of each child. Young children live in present, hence they will be made to understand the meaning of past via discussions of history, culture, geography, civic and community. In the Little Lambs Nursery classrooms children will learn how to share and cooperate to work together and thus take turns. They will participate in group activities and learn to follow simple instructions. Children will understand the wants and needs of self, society and nation.</p>
                                    </div>

                                    <div className="currculumPageImg">
                                        <img src={stem} alt="stem" className="img-fluid" />
                                        <h4 className="curriculumTitle pink">Information Technology/STEM</h4>
                                        <p>Little Lambs Nursery will provide an IT and STEM lab to the children from toddlers onwards. Electronic technology such as tablets, electronic toy, computer, as well as off-screen resources related to science, engineering and maths like toolkits, puzzles, lego, magnetic tiles, blocks, construction materials etc will be provided in the lab. Children will have opportunities to conduct simple experiments to understand scientific concepts. Teachers will record children's stories about their drawings or their play; make digital audio or video files to document their progress. Children will explore digital storytelling and co-create digital books with photos of the children's play or work; attach digital audio files with the child as the narrator. Little Lambs Nursery will use technology tools to support childrens' collaborative reasoning around STEM concepts, equalizing participation among group members and helping each child and groups improve their ideas</p>
                                    </div>

                                    <div className="currculumPageImg">
                                        <img src={last} alt="last" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CurriculumBody