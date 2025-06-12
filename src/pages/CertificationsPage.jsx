import React from 'react'

import Certificates from '../components/Certificates'
import {InternshipCertificates} from '../assets/files/certifications.js'
import { HackathonCertificate } from '../assets/files/certifications.js'
import { CourseCertificates } from '../assets/files/certifications.js'

function CertificationsPage() {
  return (
    <>
      <Certificates title='internship' list={InternshipCertificates} />
      <Certificates title='hackthon' list={HackathonCertificate} />
      <Certificates title='courses' list={CourseCertificates} />
    </>
  )
}

export default CertificationsPage
