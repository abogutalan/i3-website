// import React from 'react'

// const Article = ({imgURL, category, title, description, author, date}) => (
//     <>
//         <br />
//         <div class="card card-plain card-blog">
//             <div class="row">
//                 <div class="col-md-4">
//                     <div class="card-header card-header-image article-thumbnail-container">
//                         <img class="img img-raised article-thumbnail-img" src={imgURL} />
//                         <div class="colored-shadow"
//                             style= {{backgroundImage: `url(./assets/img/examples/card-blog4.jpg), opacity: 1`}}>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-md-8">
//                     <h6 class="card-category text-success"> {category} </h6>
//                     <h3 class="card-title">
//                         <a href="./articles/quranShouldNot.html"> {title} </a>
//                     </h3>
//                     <p class="card-description"> {description}
//                         <a href="./articles/quranShouldNot.html"> Read More </a>
//                     </p>
//                     <p class="author"> by
//                         <a href="./fellows/ijazahmed.html"> <b> {author} </b> </a>, {date}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </>
// )

// const ArticleCategory = ({linkTo, imgURL, category, background}) => (
//     <>
//         <div class="col-md-4">
//             <div class="card card-plain card-blog">
//                 <div class="card-header card-header-image">
//                     <a href={linkTo}>
//                         <img class="img img-raised" src={imgURL} />
//                     </a>
//                     <div class="colored-shadow"
//                         style= {{backgroundImage: `url(./assets/img/examples/card-blog4.jpg), opacity: 1`}}>
//                     </div>
//                 </div>
//                 <div class="card-body">
//                     <h6 class="card-category text-info text-center"> {category} </h6>
//                 </div>
//             </div>
//         </div>
//     </>
// )

// export default Article && ArticleCategory