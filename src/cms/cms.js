import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import InstructorsPagePreview from './preview-templates/InstructorsPagePreview'
import LocationsPagePreview from './preview-templates/LocationsPagePreview'
import EventsPagePreview from './preview-templates/EventsPagePreview'
import FellowsPagePreview from './preview-templates/FellowsPagePreview'
import CounselorsPagePreview from './preview-templates/CounselorsPagePreview'
import VolunteersPagePreview from './preview-templates/VolunteersPagePreview'
import SlideTestimonialsPreview from './preview-templates/SlideTestimonialsPreview'

import "../../static/assets/css/material-kit.css?v=2.1.1"
import "../../static/myAssets/stylesheets/fonts.css"


CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('instructors', InstructorsPagePreview)
CMS.registerPreviewTemplate('locations', LocationsPagePreview)
CMS.registerPreviewTemplate('event', EventsPagePreview)
CMS.registerPreviewTemplate('fellow', FellowsPagePreview)
CMS.registerPreviewTemplate('counselors', CounselorsPagePreview)
CMS.registerPreviewTemplate('volunteers', VolunteersPagePreview)
CMS.registerPreviewTemplate('slider', SlideTestimonialsPreview)
