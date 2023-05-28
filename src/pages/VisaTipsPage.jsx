import React from 'react';
import visa from '../assets/tips/visa/Visa.png';
import visaFree from '../assets/tips/visa/VisaFree.png';
import eVisa from '../assets/tips/visa/eVisa.png';
import insurance from '../assets/tips/visa/insurance.png';
import visaTips from '../assets/tips/visa/visa.jpg';
import { ImageHeader, TipsHeader } from '../components';
import { asianCountries, europeanCountries } from '../data';

const VisaTipsPage = () => {
  return (
    <section className="section">
      <div className="section-center">
        <main className="tips-container">
          <ImageHeader img={visaTips} />

          <article className="article-container">
            <TipsHeader
              title=" All Vietnam destinations are open. No self-isolation is
                required.
              
                Here are key points of the new guidelines: RT-PCR test + visa +
                travel insurance now accepted for entry."
              author="Admin"
              date="28 November 2021"
            />

            {/* single entry requirements */}
            <div className="tip-container">
              <h3 className="tip-title">Simple entry requirements:</h3>

              <ol>
                <li className="py-4">
                  <span>1. Negative Covid-19 test result per passenger</span>:{' '}
                  <br />
                  <strong>Travelers entering via air:</strong> Present negative
                  test results as mentioned in the section above. In case not
                  presenting proof of a negative test result for SARS-CoV-2 as
                  specified above, entrants are required to undergo a SARS-CoV-2
                  test at the border gate before entry (using RT-PCR/RT-LAMP
                  method or rapid antigen test for SARS-CoV-2). Upon receiving a
                  negative SARS-CoV-2 test result, they are allowed to enter and
                  join tour activities. If the RT - PCR test result returns
                  positive, they must follow strictly the regulations of the
                  health authority.
                  <br />
                  <br />
                  <strong>
                    Travelers entering via land, rail and sea routes:
                  </strong>
                  Present negative test results as mentioned in the section
                  above. In case not presenting proof of a negative test result
                  for SARS-CoV-2 as specified above, entrants are required to
                  undergo a SARS-CoV-2 test at the border gate before entry
                  (using RT-PCR/RT-LAMP method or rapid antigen test for
                  SARS-CoV-2). Upon receiving a negative SARS-CoV-2 test result,
                  they are allowed to enter and join tour activities. If the RT
                  - PCR test result returns positive, they must follow strictly
                  the regulations of the health authority.
                  <br />
                  <br />
                  <strong>Children under 2 years old</strong> are not required
                  to be tested for SARS-CoV-2. Having not been vaccinated
                  against COVID-19 or having never been infected with SARS-CoV-2
                  before, they are allowed to enter and to join outdoor
                  activities with their parents and relatives.
                </li>
                <li className="py-4">
                  2. Proof of valid medical/travel insurance covering Covid-19
                  treatment. Minimum cover USD10,000{' '}
                  <a
                    href="https://vietnamtourism.gov.vn/english/index.php/items/17003"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link to info
                  </a>
                </li>
                <li className="py-4">
                  3. Downloaded <strong>PC-Covid</strong> mobile app (
                  <a
                    href="https://apps.apple.com/us/app/pc-covid-viet-nam/id1508062685"
                    target="_blank"
                    className="underline"
                    rel="noopener noreferrer"
                  >
                    Apple
                  </a>
                  /
                  <a
                    href={`https://play.google.com/store/apps/details?id=com.mic.bluezone&hl=en&gl=US`}
                    target="_blank"
                    className="underline"
                    rel="noopener noreferrer"
                  >
                    Google Play
                  </a>
                  ) which must be presented to enter all VN establishments{' '}
                </li>
                <li className="py-4">
                  4. Visitors are requested to self-monitor for 10 days from
                  entry, and to notify the nearest medical facility should they
                  experience signs of COVID-19.
                </li>
                <li className="py-4">
                  5. Surgical masks, social distancing and sanitizing are
                  required at all times. Children under two are allowed outdoors
                  when accompanied by adults.
                </li>
              </ol>
              <h3 className="italic text-gray-500 mb-4">
                For questions about the new policy, please call Vietnam's
                Immigration Department at 024 3938 7320.{' '}
              </h3>
              <img src={visa} alt="visa info" />
            </div>

            {/* visa exemptions */}
            <div className="tip-container">
              <h3 className="tip-title">Vietnam Visa Exemptions</h3>
              <p>
                Visitors from the following countries may enter visa-free, and
                stay for the indicated number of days. The full list of
                countries with visa exemptions is below. To view visa exemptions
                for diplomatic and other passports, please visit{' '}
                <a
                  href={`http://lanhsuvietnam.gov.vn/Lists/BaiViet/B%C3%A0i%20vi%E1%BA%BFt/DispForm.aspx?List=dc7c7d75-6a32-4215-afeb-47d4bee70eee&ID=306`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
              </p>
              <p className="mb-4">
                To stay beyond this number of days, you may apply for a visa
                extension upon your arrival in Vietnam.
              </p>
              <img src={visaFree} alt="free visa countries" />
            </div>

            {/* Vietnam Visa Exemption List */}
            <div className="tip-container">
              <h3 className="tip-title">Vietnam Visa Exemption List</h3>

              {/* table */}
              <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg py-4">
                <div className="w-full overflow-x-auto">
                  <table className="w-full">
                    {/* table header */}
                    <thead>
                      <tr className="text-xs sm:text-md  text-center text-gray-900 bg-gray-100 capitalize border-b border-gray-600 ">
                        <th className="sm:px-4 sm:py-3">Area</th>
                        <th className="sm:px-4 sm:py-3">Country</th>
                        <th className="sm:px-4 sm:py-3">Residence</th>
                      </tr>
                    </thead>

                    {/* table body */}
                    <tbody>
                      {asianCountries.map((country, index) => {
                        return (
                          <tr className="text-gray-700" key={index}>
                            {/* Area */}
                            <td className="sm:text-xl text-center font-semibold border">
                              {index === 0 ? 'Asia' : ''}
                            </td>

                            {/* Country */}
                            <td className="px-4 py-3 border">
                              <div className="flex flex-col sm:flex sm:flex-row sm:justify-between text-sm ">
                                <img
                                  className="object-cover w-6 h-6 mb-4 sm:mb-0"
                                  src={country.flag_image}
                                  alt=""
                                  loading="lazy"
                                />

                                <p className="font-semibold text-sm sm:text-lg">
                                  {country.country}
                                </p>
                              </div>
                            </td>

                            {/* Term of residence */}
                            <td className="text-center text-xs sm:text-lg border">
                              <span className="text-left font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                {country.term_of_residence}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                      {europeanCountries.map((country, index) => {
                        return (
                          <tr className="text-gray-700" key={index}>
                            {/* Area */}
                            <td className="sm:text-xl text-center font-semibold border">
                              {index === 0 ? 'Europe' : ''}
                            </td>

                            {/* Country */}
                            <td className="px-4 py-3 border">
                              <div className="flex flex-col sm:flex sm:flex-row sm:justify-between text-sm ">
                                <img
                                  className="object-cover w-6 h-6 mb-4 sm:mb-0"
                                  src={country.flag_image}
                                  alt=""
                                  loading="lazy"
                                />

                                <p className="font-semibold text-sm sm:text-lg">
                                  {country.country}
                                </p>
                              </div>
                            </td>

                            {/* Term of residence */}
                            <td className="text-center text-xs sm:text-lg border">
                              <span className="text-left font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                {country.term_of_residence}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* visa notes */}
              <div>
                <h3 className="italic text-gray-600 text-lg">
                  Notes on visa exemptions:
                </h3>
                <p className="py-2">
                  Citizens of the Federal Republic of Germany, the French
                  Republic, the Italian Republic, the Kingdom of Spain, the
                  United Kingdom of Great Britain and Northern Ireland, the
                  Russian Federation, Japan, the Republic of Korea, the United
                  Kingdom of Denmark, the Kingdom of Sweden, the Kingdom of
                  Norway, the Republic of Finland and the Republic of Belarus
                  entering Vietnam for a sojourn of 15 days, counting from the
                  date of entry, regardless of their passport types and entry
                  purposes, provided they meet all the conditions prescribed by
                  Vietnam’s law.In addition, the policy on entry visa exemption
                  for citizens of the above-mentioned countries shall be
                  implemented for 3 years from March 15, 2022 to the end of
                  March 14, 2025, and will be considered for an extension in
                  accordance with Vietnam’s law.
                </p>
                <p className="italic text-gray-600 text-lg">
                  For further details of Resolution 32/NQ-CP, Click{' '}
                  <a
                    href="https://vietnamtourism.gov.vn/english/index.php/items/16994"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    here.
                  </a>
                </p>
              </div>
            </div>

            {/* Vietnam Electronic Visa (e-Visa)  */}
            <div className="tip-container">
              <h3 className="tip-title">Vietnam Electronic Visa (e-Visa) </h3>
              <p>
                Vietnam's e-Visa is now available to nationals of 80 countries:
              </p>
              <img src={eVisa} alt="Vietnam Electronic Visa" className="py-4" />
              <p>
                Andorra, Argentina, Armenia, Australia, Austria, Azerbaijan,
                Belarus, Belgium, Bosnia and Herzegovina, Brazil, Brunei,
                Bulgaria, Canada, Colombia, Croatia, Cuba, Cyprus, Czech
                Republic, Chile, China (including Hong Kong and Macau
                passports), Denmark, Estonia, Fiji, Finland, France, Georgia,
                Germany, Greece, Hungary, Iceland, India, Ireland, Italy, Japan,
                Kazakhstan, Latvia, Liechtenstein, Lithuania, Luxembourg,
                Macedonia, Malta, Marshall Islands, Mexico, Micronesia, Moldova,
                Monaco, Montenegro, Mongolia, Myanmar, Nauru, Netherlands, New
                Zealand, Norway, Palau, Panama, Papua New Guinea, Peru, Poland,
                Portugal, Philippines, Qatar, Romania, Russia, Salomon Islands,
                San Marino, Serbia, Slovakia, Slovenia, South Korea, Spain,
                Sweden, Switzerland, Timor Leste, United Arab Emirates, United
                Kingdom, United States of America, Uruguay, Vanuatu, Venezuela,
                and Western Samoa.
              </p>
              <p className="py-4">
                Simply{' '}
                <a
                  href={`https://evisa.xuatnhapcanh.gov.vn/en_US/web/guest/khai-thi-thuc-dien-tu/cap-thi-thuc-dien-tu`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-300"
                >
                  apply online for your tourist E-visa
                </a>
                , valid for 30 days. E-visa fee is USD 25, the processing time
                is 3 working days. You will receive your code by email to print
                your visa.
              </p>
              <p>
                You can enter Vietnam on an e-Visa at any of the country's eight
                international airports, including Hanoi, Ho Chi Minh City and
                Danang, as well as 14 land crossings and seven seaports.
              </p>
            </div>

            {/* How to Apply for Vietnam's e-Visa: */}
            <div className="tip-container">
              <h3 className="tip-title">How to Apply for Vietnam's e-Visa:</h3>

              {/* steps */}
              <div className="flex flex-col gap-2">
                <p>
                  <strong>Step 1: </strong>
                  Prepare the required materials:{' '}
                </p>
                <ul>
                  <li>
                    - One 4x6 passport photo in .jpg format with a white
                    background, without glasses.
                  </li>
                  <li>
                    - One photo in .jpg format of your passport data page.
                  </li>
                  <li>- Passport valid for at least six months.</li>
                  <li>
                    - Your temporary address in Vietnam and points of entry and
                    exit.
                  </li>
                  <li>- Debit or credit card for payment.</li>
                </ul>
                <p>
                  <strong>Step 2: </strong>Click{' '}
                  <a
                    href="https://evisa.xuatnhapcanh.gov.vn/en_US/web/guest/khai-thi-thuc-dien-tu/cap-thi-thuc-dien-tu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    this link
                  </a>{' '}
                  or access{' '}
                  <a
                    href="https://immigration.gov.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    https://immigration.gov.vn/
                  </a>{' '}
                  and go to 'E-visa Issuance' then click on the link for
                  'Outside Vietnam foreigners'.{' '}
                </p>
                <p>
                  <strong>Step 3: </strong>Upload your .jpg images (passport
                  data page and passport photo) and fill out the required fields
                  on the form completely. Submit your form.
                </p>
                <p>
                  <strong>Step 4: </strong>Pay the e-Visa fee of 25 USD. Copy
                  down the document code provided.{' '}
                </p>
                <p>
                  <strong>Step 5: </strong>Within three working days you should
                  receive news of your e-Visa application via email. If not, you
                  can also run a search for your e-Visa at this{' '}
                  <a
                    href="https://evisa.xuatnhapcanh.gov.vn/tra-cuu-thi-thuc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    link
                  </a>
                  .{' '}
                </p>
                <p>
                  <strong>Step 6: </strong>Use your document code to locate your
                  e-Visa online. Download and print the e-Visa in two copies for
                  extra safety.
                </p>
                <blockquote className="quote">
                  <p>
                    TIP: Travellers with an e-Visa can go directly to
                    immigration counters at their point of entry and do not need
                    to queue at Visa on Arrival counters.{' '}
                  </p>
                </blockquote>
                <p>Insurance requirement:</p>
                <p>
                  Purchase medical/travel insurance that covers COVID-19
                  treatment with a minimum coverage: $10,000. This typically
                  costs about USD 40.
                </p>
                <img src={insurance} alt="insurance info" />
              </div>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Vietnam Visa on Arrival</h3>

              <p>
                If you are planning a multiple-entry visit or a stay of more
                than 30 days, you will want to apply for a visa on arrival. To
                do this you'll need:
              </p>
              <ol>
                <li>
                  1. A 4x6 passport photo with a white background and no
                  glasses.
                </li>
                <li>
                  2. A filled-out visa application form{' '}
                  <a
                    href="https://visa.mofa.gov.vn/_layouts/registration/ApplicationForm.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    visa application form
                  </a>
                </li>
                <li>
                  3. A passport or substitute ID valid for six months from the
                  date you plan to enter Vietnam.
                </li>
                <li>4. Payment (25 USD to 50 USD) for visa fees, and</li>
                <li>
                  5. A Letter of Approval from a Vietnamese embassy or consulate
                  (if you are picking up your visa at the airport).
                </li>
              </ol>
              <p>
                If you are near a Vietnamese embassy or consulate, you can
                submit your photo, application form, passport, and visa fee in
                person.{' '}
                <a
                  href="https://visa.mofa.gov.vn/Homepage.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  This website
                </a>{' '}
                will guide you through the process.{' '}
              </p>
              <p>
                If you are unable to reach a Vietnamese embassy or are short on
                time, there are trusted services online that can provide you
                with a valid Letter of Approval for a fee. Bring this letter
                together with a visa application form and your other documents
                to the Visa on Arrival counter at the airport when you land.{' '}
              </p>
              <blockquote className="quote">
                <p>
                  TIP: You will need to pay your visa stamp fee in USD or
                  Vietnamese Dong on arrival at the airport.
                </p>
              </blockquote>

              <p className="italic text-gray-500">
                The information above is compiled by the Vietnam National
                Administration of Tourism. Guidelines may change at any time
                based on conditions, as determined by the Vietnam government.
              </p>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
};

export default VisaTipsPage;
