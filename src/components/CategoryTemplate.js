// import React from 'react'

// const CategoryTemplate = ({category, imgURL, title}) => (
//     <>
//     <div className = "page-header header-filter header-small" data-parallax="true"
//         style={{backgroundImage: `url('./myAssets/img/Research Center/Fellows/FellowsCover.png')`}}>
//         <div className = "container">
//             <div className = "row">
//                 <div className = "col-md-8 ml-auto mr-auto text-center">
//                     <h1 className = "title">Research Articles</h1>
//                     <h4>Deep-dive into the articles by our esteemed Research Fellows.</h4>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className = "main main-raised">
//         <div className = "container">
//             <div className = "projects-4" id="projects-4">
//                 <div className = "container">
//                     <div className = "row">
//                         <div className = "col-md-10 ml-auto mr-auto">
//                             <h2 className = "title">{category} Articles</h2>
//                             <br />
//                             <div className = "card card-plain card-blog">
//                                 <div className = "row">
//                                     <div className = "col-md-4">
//                                         <div className = "card-header card-header-image article-thumbnail-container">
//                                             <img className = "img img-raised article-thumbnail-img"
//                                                 src={imgURL}/>
//                                             <div className = "colored-shadow"
//                                                 style={{backgroundImage: `url('./assets/img/office2.jpg')`, opacity: 1}}>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className = "col-md-8">
//                                         <h6 className = "card-category text-success">
//                                             {category}
//                                         </h6>
//                                         <h3 className = "card-title">
//                                             <a href="./articles/quranShouldNot.html">{title}</a>
//                                         </h3>
//                                         <p className = "card-description">
//                                             When one considers the miracle of the Qur’an, a topic which is often
//                                             highlighted is that of its preservation and there is very good reason for
//                                             this. There are three significant reasons as to why the Qur’an should not
//                                             have been preserved …
//                                             <a href="./articles/quranShouldNot.html"> Read More </a>
//                                         </p>
//                                         <p className = "author">
//                                             by
//                                             <a href="./fellows/ijazahmed.html">
//                                                 <b>Ijaz Ahmed</b>
//                                             </a>, May 17, 2019
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className = "card card-plain card-blog">
//                                 <div className = "row">
//                                     <div className = "col-md-4">
//                                         <div className = "card-header card-header-image article-thumbnail-container">
//                                             <img className = "img img-raised article-thumbnail-img"
//                                                 src="./myAssets/img/Research Center/Articles/Article Pics/atheistsFringeGroup-1.jpeg"/>
//                                             <div className = "colored-shadow"
//                                                 style={{backgroundImage: `url('./assets/img/office2.jpg')`, opacity: 1}}>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className = "col-md-8">
//                                         <h6 className = "card-category text-success">
//                                             History
//                                         </h6>
//                                         <h3 className = "card-title">
//                                             <a href="./articles/atheistsFringeGroup.html">Atheists as a Fringe Group in
//                                                 Human History</a>
//                                         </h3>
//                                         <p className = "card-description">
//                                             Although atheism is nothing new and has always existed throughout human
//                                             history, it was never a widespread phenomenon like it has become today. In
//                                             fact, what history shows us is that there were very rare cases of the total
//                                             denial of a supreme…
//                                             <a href="./articles/atheistsFringeGroup.html"> Read More </a>
//                                         </p>
//                                         <p className = "author">
//                                             by
//                                             <a href="./fellows/kamilahmed.html">
//                                                 <b>Kamil Ahmad</b>
//                                             </a>, May 17, 2019
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className = "row">
//                         <div className = "col-md-10 ml-auto mr-auto">
//                             <div className = "section-space"></div>
//                             <h2 className = "title text-center">All Article Categories</h2>
//                             <div className = "row">
//                                 <div className = "col-md-4">
//                                     <div className = "card card-plain card-blog">
//                                         <div className = "card-header card-header-image">
//                                             <a href="./articles/categories/theologyAndPhilosophy.html">
//                                                 <img className = "img img-raised"
//                                                     src="./myAssets/img/Research Center/Articles/Category Thumbnails/Theology & Philosophy.jpg" />
//                                             </a>
//                                             <div className = "colored-shadow"
//                                                 style={{backgroundImage: `url('./assets/img/examples/card-blog4.jpg')`, opacity: 1}}>
//                                             </div>
//                                         </div>
//                                         <div className = "card-body">
//                                             <h6 className = "card-category text-info text-center">Theology & Philosophy</h6>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className = "col-md-4">
//                                     <div className = "card card-plain card-blog">
//                                         <div className = "card-header card-header-image">
//                                             <a href="./articles/categories/history.html">
//                                                 <img className = "img img-raised"
//                                                     src="./myAssets/img/Research Center/Articles/Category Thumbnails/History.jpg" />
//                                             </a>
//                                             <div className = "colored-shadow"
//                                                 style={{backgroundImage: `url('./assets/img/examples/blog5.jpg')`, opacity: 1}}>
//                                             </div>
//                                         </div>
//                                         <div className = "card-body ">
//                                             <h6 className = "card-category text-success text-center">
//                                                 History
//                                             </h6>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className = "col-md-4">
//                                     <div className = "card card-plain card-blog">
//                                         <div className = "card-header card-header-image">
//                                             <a href="./articles/categories/economics.html">
//                                                 <img className = "img img-raised"
//                                                     src="./myAssets/img/Research Center/Articles/Category Thumbnails/Economics.jpg" />
//                                             </a>
//                                             <div className = "colored-shadow"
//                                                 style={{backgroundImage: `url('./assets/img/examples/blog7.jpg')`, opacity: 1}}>
//                                             </div>
//                                         </div>
//                                         <div className = "card-body ">
//                                             <h6 className = "card-category text-danger text-center">
//                                                 Economics
//                                             </h6>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className = "col-md-4">
//                                     <div className = "card card-plain card-blog">
//                                         <div className = "card-header card-header-image">
//                                             <a href="./articles/categories/science.html">
//                                                 <img className = "img img-raised"
//                                                     src="./myAssets/img/Research Center/Articles/Category Thumbnails/Science.jpg" />
//                                             </a>
//                                             <div className = "colored-shadow"
//                                                 style={{backgroundImage: `url('./assets/img/examples/blog7.jpg')`, opacity: 1}}>
//                                             </div>
//                                         </div>
//                                         <div className = "card-body ">
//                                             <h6 className = "card-category text-primary text-center">
//                                                 Science & Society
//                                             </h6>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className = "col-md-4">
//                                     <div className = "card card-plain card-blog">
//                                         <div className = "card-header card-header-image">
//                                             <a href="./articles/categories/editorials.html">
//                                                 <img className = "img img-raised"
//                                                     src="./myAssets/img/Research Center/Articles/Category Thumbnails/Editorials.jpg" />
//                                             </a>
//                                             <div className = "colored-shadow"
//                                                 style={{backgroundImage: `url('./assets/img/examples/blog7.jpg')`, opacity: 1}} >
//                                             </div>
//                                         </div>
//                                         <div className = "card-body ">
//                                             <h6 className = "card-category text-warning text-center">
//                                                 Editorials
//                                             </h6>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

//     </>
// )

// export default CategoryTemplate