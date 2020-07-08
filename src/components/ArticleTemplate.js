// import React from 'react'
// import Layout from './layout'

// const ArticleTemplate = ({title, author, overview, translation, verse, imgURL, title2, ref1, exp1}) => (
//     <Layout>
//     <>
//     <div className="page-header header-filter header-small" data-parallax="true"
//         style="background-image: url('./myAssets/img/Research Center/Fellows/FellowsCover.png');">
//         <div className="container">
//             <div className = "row">
//                 <div className = "col-md-8 ml-auto mr-auto text-center">
//                     <h1 className = "title"> { title } </h1>
//                     <h4>By {author}</h4>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="main main-raised">
//         <div className="container">
//             <div className="section section-text">
//                 <div className="row">
//                     <div className="col-md-8 ml-auto mr-auto">
//                         <h3 className="title">Abstract</h3>
//                         <p>
//                             {overview}
//                             <ol>
//                                 <li>There was no one unified Arabic dialect at the time of its revelation.</li>
//                                 <li>The Arabs were still developing their orthography.</li>
//                                 <li>The Arabs had not published any document for mass public use
//                                     unifying the Arabs.
//                                 </li>
//                             </ol>
//                         </p>
//                         <div className="blockquote undefined">
//                             <p>
//                                 “{translation}”
//                             </p>
//                             <small>
//                                 Qur’an ({verse})
//                             </small>
//                         </div>
//                     </div>
//                     <div className="section col-md-10 ml-auto mr-auto">
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <img className="img-raised rounded img-fluid article-img" alt={title}
//                                     src={imgURL} />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-8 ml-auto mr-auto">
//                         <h3 className="title">{title2}</h3>
//                         <p>
//                             In the first case, various Arab tribes at the time of the Prophet Muhammad (peace be upon
//                             him) spoke differing dialects of the Arabic language.
//                             <span id="ref1" className="ref-link">.</span>
//                             <sup><a href="./articles/quranShouldNot.html#1">{ref1}</a></sup>
//                             {exp1}
//                             <span id="ref2" className="ref-link">.</span>
//                             <sup><a href="./articles/quranShouldNot.html#2">[2]</a></sup>
//                         </p>
//                         <p>
//                             Such a serious and difficult problem is addressed directly in the Qur’an as it says in 
//                             Qur’an 54:17, “And We have certainly made the Quran easy to remember. So is there anyone who
//                             will be mindful?” This easing in one sense refers to the mechanisms of the Ahruf and the
//                             Qira’at, as one narration from Ubayy ibn Ka’b states:
//                         </p>
//                         <div claclassNamess="blockquote undefined">
//                             <p>
//                                 Permission to recite the Qur’an in seven styles was given after the hijrah: Ubayy ibn
//                                 Ka’b reported that the Messenger of Allah was near the Banū Ghifar’s watering place when
//                                 Jibril came to him and said: “Allah has commanded you to recite to your people the
//                                 Qur’an in one harf.” Upon [hearing] this, he said: “I ask for Allah’s pardon and
//                                 forgiveness. My people are not capable of doing it.” He came a second time and said:
//                                 “Allah has commanded you to recite the Qur’an to your people in two ahruf.” Upon
//                                 [hearing] this, he again said: “I seek Allah’s pardon and forgiveness. My people would
//                                 not be able to do so.” He (Jibril) came for a third time and said: “Allah has commanded
//                                 you to recite the Qur’an to your people in three ahruf.” Upon [hearing] this, he said:
//                                 “I ask Allah’s pardon and forgiveness. My people would not be able to do it.” He then
//                                 came to him for a fourth time and said: “Allah has commanded you to recite the Qur’an to
//                                 your people in seven ahruf, and in whichever they recite, they will be right.”
//                                 <span id="ref3" className="ref-link">.</span>
//                                 <sup><a href="./articles/quranShouldNot.html#3">[3]</a></sup>
//                             </p>
//                             <small>
//                                 Ubayy ibn Ka’b
//                             </small>
//                         </div>
//                         <p>
//                             Another popular narration from the Prophet (peace be upon him) conveys the idea that the
//                             Qur’an was meant to be a transgenerational unifier: “The Prophet (S) met Jibril and told
//                             him: “I have been sent to an illiterate people, among them are the old woman, the aged
//                             shaykh, the [male] servant and the female servant, and the man who has never read a book.”
//                             Jibril said to him: “O Muhammad, the Qur’an has been revealed in seven ahruf.”
//                             <span id="ref4" className="ref-link">.</span>
//                             <sup><a href="./articles/quranShouldNot.html#4">[4]</a></sup>
//                             The Qur’an
//                             as a mechanism itself for the unity and prominence of the Arabs has been recognized by
//                             non-Muslim scholars of dialectology as well, Prof. Clive Holes writes:

//                         </p>
//                         <div className="blockquote undefined">
//                             <p>
//                                 “Though the Arabian
//                                 poets of the pre-Islamic ‘Time of Ignorance’ (al-jahiliyya) were and still are
//                                 celebrated
//                                 for the magnificence of their mono-rhyming odes (qasa'id ), it was the revelation of
//                                 the
//                                 Qur'an, and in Arabic, which, in the popular imagination, moved the language and the
//                                 people
//                                 who spoke it to centre stage in world history.”
//                                 <span id="ref5" className="ref-link">.</span>
//                                 <sup><a href="./articles/quranShouldNot.html#5">[5]</a></sup>
//                             </p>
//                             <small>
//                                 Prof. Clive Holes
//                             </small>
//                         </div>
//                         <p>
//                             He proceeds to state that the Qur’an’s repeated references to its use of Arabic and of its
//                             message to the Arabs provided a medium to facilitate the development of a newly emerging
//                             shared culture through its religious influence:
//                         </p>
//                         <div className="blockquote undefined">
//                             <p>
//                                 “This is surprising, but probably not significant, as by this time the generic concept
//                                 of ‘Arabs’ based on a common language and shared elements of culture (such as the tribal
//                                 poetry which was then circulating) must have existed at least in embryonic form. More
//                                 likely than any esoteric meaning, it seems to this writer that the Qur’an’s repeated
//                                 insistence on the ‘Arab/Arabic’ nature of its message was intended to promote a
//                                 distinctive linguistic facet of this emerging shared culture, to which it was now adding
//                                 a new religious dimension.”
//                                 <span id="ref6" className="ref-link">.</span>
//                                 <sup><a href="./articles/quranShouldNot.html#6">[6]</a></sup>
//                             </p>
//                             <small>
//                                 Prof. Clive Holes
//                             </small>
//                         </div>
//                         <p>
//                             That the Qur’an managed this feat is indeed of significant note and this should have been
//                             one main reason as to why it should not have been preserved. Had they wished, rival tribes
//                             could have merely emended the Qur’an to suit their dialects as opposed to accepting the
//                             various Qira’at of the Prophet (peace be upon him), yet in the end it is the opposite which
//                             occurred. This is exemplified by the presence of the glottal stop which at the time of the
//                             Prophet Muhammad (peace be upon him) had fallen out of use in the Hijaz.
//                             <span id="ref7" className="ref-link">.</span>
//                             <sup><a href="./articles/quranShouldNot.html#7">[7]</a></sup>
//                         </p>
//                         <h3 className='title'>The Development of Arabic Orthography</h3>
//                         <p>
//                             Writing itself played no significant role among the Arabs, as Dr. Alain George writes:
//                         </p>
//                         <div className="blockquote undefined">
//                             <p>
//                                 "Poetry was highly valued as the foremost art form and the cement of Arab identity.
//                                 Writing, on the other hand, was occasionally used for votive or proclamatory
//                                 inscriptions carved onto rocks in the desert, and also possible for correspondence on
//                                 such portable documents as papyri. When they did write in those early days, the Arabs
//                                 did so in a variety of scripts associated with the local language of prestige: for
//                                 example, South Arabian in some extant inscriptions a Qaryat al-Faw, between the Yeen and
//                                 the Hijaz; Dadanitic in Dedan; and, at the northern frontier of the peninsula,
//                                 Nabataen.
//                                 <span id="ref8" className="ref-link">.</span>
//                                 <sup><a href="./articles/quranShouldNot.html#8">[8]</a></sup>
//                                 "
//                             </p>
//                             <small>
//                                 Dr. Alain George
//                             </small>
//                         </div>
//                         <p>
//                             The primitivity of the Arabic rasm cannot be underscored, Dr. Alain George explains: “At the
//                             time of the Qur’anic revelation, the Arabs already had at their disposal a set of
//                             well-formed, if primitive letter shapes.”
//                             <span id="ref9" className="ref-link">.</span>
//                             <sup><a href="./articles/quranShouldNot.html#9">[9]</a></sup>
//                             Yet this primitive-like state of the Arabic rasm
//                             did not detract from the transmission and preservation of the Qur’an, but rather expedited
//                             it: “The orthography of the copies (maṣaḥif) of the ‘Uthmanic writ (maṣḥaf al-imam) is
//                             intended to preserve the soundly transmitted and authentic recitations, not to initiate or
//                             create a recitation.”
//                             <span id="ref10" className="ref-link">.</span>
//                             <sup><a href="./articles/quranShouldNot.html#10">[10]</a></sup>
//                             It would have been easy for the Qur’an to be lost in transmission
//                             due to the primitive state of Arabic orthography during Islam’s nascent period in Arabia
//                             during the early seventh century. Indeed, such a scenario is not hypothetical but one which
//                             impacts modern readers of the Qur’an. In one recent case, a Christian missionary did not
//                             understand the fundamentals of Arabic orthography and so the presence of a singular dot
//                             above the Arabic letter qaf,
//                             <span id="ref11" className="ref-link">.</span>
//                             <sup><a href="./articles/quranShouldNot.html#11">[11]</a></sup>
//                             presumably led her to reason that the letter was the Arabic
//                             letter fa.
//                             <span id="ref12" className="ref-link">.</span>
//                             <sup><a href="./articles/quranShouldNot.html#12">[12]</a></sup>
//                             Ignorance of various Arabic rasm styles in this one case led this missionary to
//                             misread the word sadaqatin in Qur’an 2:261 (263 in the Qira’ah of Hafs ‘an Aasim) as
//                             sadafatin (seashells).
//                             <span id="ref13" className="ref-link">.</span>
//                             <sup><a href="./articles/quranShouldNot.html#13">[13]</a></sup>
//                         </p>
//                         <p>
//                             The verse in the recitation of Hafs ‘an Aasim reads: “Kind words and forgiveness are better
//                             than charity followed by injury. And Allah is Self-Sufficient, Most Forbearing.” Their
//                             emendation to the passage would have changed it to read: “Kind words and forgiveness are
//                             better than seashells followed by injury. And Allah is Self-Sufficient, Most Forbearing.”
//                             Therefore, the possibility of a non-standard rasm affecting the transmission of the Qur’an
//                             is not only plausible but demonstrable, yet there is not a single instance of a new Qira’ah
//                             being conveyed due to an error (lapsus calami) or intentional change (emendation) due to its
//                             orthography. The preponderance of the Uthmanic rasm therefore plays a pivotal, if not
//                             essential role in the preservation and transmission of the Qur’an.
//                         </p>
//                         <h3 className='title'>The Qur’an: The First Public Document Published by the Arabs</h3>
//                         <p>
//                             As per Dr. George, the Qur’an is the first mass transmitted, publicly proclaimed for public
//                             use work of literature conveyed by the Arab peoples.
//                             <span id="ref14" className="ref-link">.</span>
//                             <sup><a href="./articles/quranShouldNot.html#14">[14]</a></sup>
//                             Not only did the Qur’an have to overcome dialectical challenges and palaeographical
//                             challenges, the Arabs also had to
//                             develop a system of transmission capable of preserving its recitations without change. So
//                             few were those who were even partially literate that the early Muslims even utilized the
//                             enemies of Islam to educate them so that they would be able to read the Qur’an.
//                             <span id="ref15" className="ref-link">.</span>
//                             <sup><a href="./articles/quranShouldNot.html#15">[15]</a></sup>
//                             Here then,
//                             was also another possible point of weakness where had the enemies of Islam chosen to
//                             negatively impact the transmission of the Qur’an, they could have done so, yet this again
//                             was not the case. Today it is easy to convey a message to the public, we can post Tweets,
//                             send mass emails, text, print sheets of paper in a matter of seconds, yet none of these were
//                             options available to the Muslims in 7th century Arabia. They were not a literate people,
//                             they did not have scriptoria as the Graeco-Romans possessed centuries earlier, they did not
//                             have a developed orthography, they did not have systems for the mass proclamation of
//                             information, and in despite of all these challenges the Qur’an overcame them all.
//                         </p>
//                         <h3 className='title'>Conclusion</h3>
//                         <p>
//                             There can only be one reason for the Qur’an’s success given the challenges it faced. As Dr.
//                             Altikulaç writes:
//                         </p>
//                         <div className="blockquote undefined">
//                             <p>
//                                 "Apparently, the Holy Qur’an was protected not only by the Hafizuns [sic] (people who
//                                 have memorized the complete Qur’an) reading and memorizing but also thanks to its script
//                                 and spelling. It exists in the same way that it was revealed and recorded fourteen
//                                 centuries ago. These written documents are the actual and material manifestations of the
//                                 divine revelation to the effect that “Behold, it is We Ourselves who have bestowed from
//                                 on high, step by step, this reminder: and, behold, it is We who shall truly guard it
//                                 [from all corruption]”.
//                                 <span id="ref16" className="ref-link">.</span>
//                                 <sup><a href="./articles/quranShouldNot.html#16">[16]</a></sup>"
//                             </p>
//                             <small>
//                                 Dr.
//                                 Altikulaç
//                             </small>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="section-comments">
//                 <div className="row">
//                     <div className="col-md-8 ml-auto mr-auto">
//                         <div className="media-area">
//                             <h3 className="title text-center">Notes</h3>
//                             <ul>
//                                 <li className="note-item">
//                                     <span id="1" className="ref-link">.</span>
//                                     <a href="./articles/quranShouldNot.html#ref1">[1]</a>
//                                     “In the Hijaz, most of the population lived a pastoral life centred on nomadic
//                                     tribes, which spoke a multiplicity of related dialects. The main urban centres were
//                                     oasis towns of modest size, such as Mecca, Medina (then known as Yathrib), Dedan or
//                                     Ḥegra.”

//                                     See page 21 in Dr. George’s work. George, Alain. The Rise of Islamic Calligraphy.
//                                     London: Saqi, 2010.

//                                     “Many commentators point out that the Arabs, who in most cases were illiterate and
//                                     had various ways of pronounciation [sic] or dialects, found it very hard to abandon
//                                     their dialects and ways of recitation all at once. As a result, they tried to cling
//                                     strongly to their dialects.”

//                                     See page 23 in Dr. Al Imam’s work.

//                                     Al Imam, Ahmed Ali. Variant Readings of The Quran: A Critical Study of Their
//                                     Historical And Linguistic Origins. London: International Institute of Islamic
//                                     Thought (IIIT), 2006.

//                                 </li>
//                                 <li className="note-item">
//                                     <span id="2" className="ref-link">.</span>
//                                     <a href="./articles/quranShouldNot.html#ref2">[2]</a>
//                                     See pages 115 to 116 in Dr. Taqi Usmani’s work which defines what the Ahruf are
//                                     and their relation to the Qira’at of the one Qur’an.

//                                     Usmani, Muhammad Taqi, M. S. Siddiqui, and Rafiq Abdur Rehman. An Approach to the
//                                     Quranic Sciences. New Delhi: Adam Publishers & Distributors, 2010.

//                                 </li>
//                                 <li className="note-item">
//                                     <span id="3" className="ref-link">.</span>
//                                     <a href="./articles/quranShouldNot.html#ref3">[3]</a>
//                                     See page 23 in Dr. Al Imam’s work.

//                                     Al Imam, Ahmed Ali. Variant Readings of The Quran: A Critical Study of Their
//                                     Historical And Linguistic Origins. London: International Institute of Islamic
//                                     Thought (IIIT), 2006.

//                                 </li>
//                                 <li clasclassNames="note-item">
//                                     <span id="4" class="ref-link">.</span>
//                                     <a href="./articles/quranShouldNot.html#ref4">[4]</a>
//                                     See page 23 in Dr. Al Imam’s work.

//                                     Al Imam, Ahmed Ali. Variant Readings of The Quran: A Critical Study of Their
//                                     Historical And Linguistic Origins. London: International Institute of Islamic
//                                     Thought (IIIT), 2006.

//                                 </li>
//                                 <li class="note-item">
//                                     <span id="5" class="ref-link">.</span>
//                                     <a href="./articles/quranShouldNot.html#ref5">[5]</a>
//                                     See page 2 in Prof. Clive Hole’s work.

//                                     Holes, Clive. Arabic Historical Dialectology: Linguistic and Sociolinguistic
//                                     Approaches. Oxford: Oxford University Press, 2018.
//                                 </li>
//                                 <li class="note-item">
//                                     <span id="6" class="ref-link">.</span>
//                                     <a href="./articles/quranShouldNot.html#ref6">[6]</a>
//                                     See page 4 in Prof. Clive Hole’s work.

//                                     Holes, Clive. Arabic Historical Dialectology: Linguistic and Sociolinguistic
//                                     Approaches. Oxford: Oxford University Press, 2018.

//                                 </li>
//                                 <li class="note-item">
//                                     <span id="7" class="ref-link">.</span>
//                                     <a href="./articles/quranShouldNot.html#ref7">[7]</a>
//                                     “But this can mean no more than the fact the Qur’an is mainly in the Qurayshī
//                                     dialect, for it contains features from other dialects, such as the retention of
//                                     hamzah, which generally disappears in the Ḥijazī dialect.” See page 30 in Dr. al
//                                     Imam’s work.
//                                     Al Imam, Ahmed Ali. Variant Readings of The Quran: A Critical Study of Their
//                                     Historical And Linguistic Origins. London: International Institute of Islamic
//                                     Thought (IIIT), 2006.
//                                 </li>
//                                 <li class="note-item">
//                                     <span id="8" class="ref-link">.</span>
//                                     <a href="./articles/quranShouldNot.html#ref8">[8]</a>
//                                     George, Alain. "On the Rise and Meaning of Islamic Calligraphy." Hadeeth Ad-Dar
//                                     33 (2011): 10.
//                                     http://islamicmanuscripts.info/reference/articles/Hadith-Dar-33-2011/Hadith-33-George-2011-Calligraphy.pdf.
//                                 </li>
//                                 <li class="note-item">
//                                     <span id="9" class="ref-link">.</span>
//                                     <a href="./articles/quranShouldNot.html#ref9">[9]</a>
//                                     See page 21 in Dr. George’s work. George, Alain. The Rise of Islamic Calligraphy.
//                                     London: Saqi, 2010.
//                                 </li>
//                                 <li class="note-item">
//                                     <span id="10" class="ref-link">.</span>
//                                     <a href="./articles/quranShouldNot.html#ref10">[10]</a>
//                                     See page 19 in Dr. Al Imam’s work.

//                                     Al Imam, Ahmed Ali. Variant Readings of The Quran: A Critical Study of Their
//                                     Historical And Linguistic Origins. London: International Institute of Islamic
//                                     Thought (IIIT), 2006.

//                                 </li>
//                                 <li class="note-item">
//                                     <span id="11" class="ref-link">.</span>
//                                     <a href="./articles/quranShouldNot.html#ref11">[11]</a>
//                                     “Sea-shells? Debunking differences in Warsh Quran Mansur vs Christan | Speakers
//                                     Corner,” Youtube video, 20:50, “SCDawah,” May 20, 2018,
//                                     <a href="https://youtu.be/SfUde_0wudQ?t=1201">
//                                         https://youtu.be/SfUde_0wudQ?t=1201
//                                     </a>
//                                 </li>
//                                 <li class="note-item">
//                                     <span id="12" class="ref-link">.</span>
//                                     <a href="./articles/quranShouldNot.html#ref12">[12]</a>
//                                     Fa meaning the Arabic letter ف and Qaf meaning the Arabic letter ق.
//                                 </li>
//                                 <li class="note-item">
//                                     <span id="13" class="ref-link">.</span>
//                                     <a href="./articles/quranShouldNot.html#ref13">[13]</a>
//                                     Sadaqatin meaning the Arabic word صدقة, and Sadafatin meaning the Arabic word
//                                     صدفة.
//                                 </li>
//                                 <li class="note-item">
//                                     <span id="14" class="ref-link">.</span>
//                                     <a href="./articles/quranShouldNot.html#ref14">[14]</a>
//                                     “Until the Qur’anic revelation, the Arabs had had a predominantly oral culture, with
//                                     poetry as its main artistic expression. Within decades of the rise of Islam, a new
//                                     empire emerged which placed script at the heart of its identity, creating an art
//                                     profoundly distinct from the age of old iconographies of Byzantium and Sasanian
//                                     Iran, yet able to stand on a part with them.”
//                                     “Before Islam, the cultural sphere of the Arabs extended far to the north of the
//                                     Arabian Peninsula, into the desert areas between Syria and Iraq. In the peninsula
//                                     itself, most of the population lived a nomadic life based on tribal allegiances,
//                                     although there were also cities of modest size, such as Makkah and Yathrib (later
//                                     known as Madinah). Poetry was highly valued as the foremost art form and the cement
//                                     of Arab identity. Writing, on the other hand, was only occasionally used for votive
//                                     or proclamatory inscriptions carved onto rocks in the desert, and also possibly for
//                                     correspondence on such portable documents as papyri.”
//                                     George, Alain. "On the Rise and Meaning of Islamic Calligraphy." Hadeeth Ad-Dar 33
//                                     (2011): 10.
//                                     <a
//                                         href="http://islamicmanuscripts.info/reference/articles/Hadith-Dar-33-2011/Hadith-33-George-2011-Calligraphy.pdf">
//                                         http://islamicmanuscripts.info/reference/articles/Hadith-Dar-33-2011/Hadith-33-George-2011-Calligraphy.pdf
//                                     </a>
//                                     .

//                                 </li>
//                                 <li class="note-item">
//                                     <span id="15" class="ref-link">.</span>
//                                     <a href="./articles/quranShouldNot.html#ref15">[15]</a>
//                                     See page 56 in Dr. Azami’s work.
//                                     Al Azami, Muhammad Mustafa. The History of the Quranic Text: From Revelation to
//                                     Compilation: A Comparative Study with the Old and New Testaments. Leicester: UK
//                                     Islamic Academy, 2011.

//                                 </li>
//                                 <li class="note-item">
//                                     <span id="16" class="ref-link">.</span>
//                                     <a href="./articles/quranShouldNot.html#ref16">[16]</a>
//                                     See pages 82-83 in Dr Altikulaç’s work.

//                                     Altikulaç, Tayyar, Ekmeleddin Ihsanoglu, and Salih Sadawi. Al-Mushaf Al-Sharif
//                                     Attributed to Uthman Bin Affan (the Copy at The Topkapi Palace Museum). Istanbul:
//                                     Organisation of the Islamic Conference/Research Centre for Islamic History, Art and
//                                     Culture, 2007.

//                                 </li>
//                             </ul>
//                         </div>
//                         <div class="media-area">
//                             <h3 class="title text-center">Bibliography</h3>
//                             <ol>
//                                 <li>
//                                     Al Azami, Muhammad Mustafa. The History of the Quranic Text: From Revelation to
//                                     Compilation: A Comparative Study with the Old and New Testaments. Leicester: UK
//                                     Islamic Academy, 2011.
//                                 </li>
//                                 <li>
//                                     Al Imam, Ahmed Ali. Variant Readings Of The Quran: A Critical Study of Their
//                                     Historical And Linguistic Origins. London: International Institute of Islamic
//                                     Thought (IIIT), 2006.
//                                 </li>
//                                 <li>
//                                     Altikulaç, Tayyar, Ekmeleddin Ihsanoglu, and Salih Sadawi. Al-Mushaf Al-Sharif
//                                     Attributed to Uthman Bin Affan (the Copy at The Topkapi Palace Museum). Istanbul:
//                                     Organisation of the Islamic Conference/Research Centre for Islamic History, Art and
//                                     Culture, 2007.
//                                 </li>
//                                 <li>
//                                     George, Alain. The Rise of Islamic Calligraphy. London: Saqi, 2010.
//                                 </li>
//                                 <li>
//                                     George, Alain. "On the Rise and Meaning of Islamic Calligraphy." Hadeeth Ad-Dar 33
//                                     (2011): 10 .
//                                     <a
//                                         href="http://islamicmanuscripts.info/reference/articles/Hadith-Dar-33-2011/Hadith-33-George-2011-Calligraphy.pdf">
//                                         http://islamicmanuscripts.info/reference/articles/Hadith-Dar-33-2011/Hadith-33-George-2011-Calligraphy.pdf
//                                     </a>
//                                     .
//                                 </li>
//                                 <li>
//                                     Holes, Clive. Arabic Historical Dialectology: Linguistic and Sociolinguistic
//                                     Approaches. Oxford: Oxford University Press, 2018.
//                                 </li>
//                                 <li>
//                                     “Sea-shells? Debunking differences in Warsh Quran Mansur vs Christan | Speakers
//                                     Corner,” Youtube video, 20:50, “SCDawah,” May 20, 2018,
//                                     <a
//                                         href="https://youtu.be/SfUde_0wudQ?t=1201">https://youtu.be/SfUde_0wudQ?t=1201</a>
//                                 </li>
//                                 <li>
//                                     Usmani, Muhammad Taqi, M. S. Siddiqui, and Rafiq Abdur Rehman. An Approach to the
//                                     Quranic Sciences. New Delhi: Adam Publishers & Distributors, 2010.
//                                 </li>
//                             </ol>
//                         </div>

//                         {/* <!-- end media-post --> */}
//                     </div>
//                 </div>
//             </div>
//             <div class="section section-blog-info">
//                 <div class="row">
//                     <div class="col-md-8 ml-auto mr-auto">
//                         <hr />
//                         <div class="card card-profile card-plain">
//                             <div class="row">
//                                 <div class="col-md-2">
//                                     <div class="card-avatar">
//                                         <img class="img" src="./myAssets/img/Research Center/Fellows/ijazahmed.jpg" />
//                                         <div class="ripple-container"></div>
//                                     </div>
//                                 </div>
//                                 <div class="col-md-8">
//                                     <h4 class="card-title">Ijaz Ahmad</h4>
//                                     <p class="description">
//                                         Ijaz Ahmad has studied the Qur'an and the Bible for more than a decade.
//                                     </p>
//                                 </div>
//                                 <div class="col-md-2">
//                                     <a href="./fellows/ijazahmed.html">
//                                         <button type="button" class="btn btn-danger pull-right btn-round">
//                                             More
//                                         </button>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     </div>
//     </>
//     </Layout>
// )

// export default ArticleTemplate