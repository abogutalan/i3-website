import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import InstructorsPagePreview from './preview-templates/InstructorsPagePreview'
import FCCPagePreview from './preview-templates/FCCPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('instructors', InstructorsPagePreview)
CMS.registerPreviewTemplate('counselors', FCCPagePreview)
