<template>
  <div class="w-full dark:text-gray-200 bg-white dark:bg-gray-800">
    <Container>
      <div class="flex flex-col px-4 md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div class="p-4 flex flex-row items-center justify-between">
          <Logo />
          <button
            class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            @click="navIsOpen = !navIsOpen"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                v-if="!navIsOpen"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                v-else
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          :class="{ flex: navIsOpen, hidden: !navIsOpen }"
          class="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row"
        >
          <!-- Branch -->
          <NavDropdown :title="$t('nav.branch.title')">
            <NavLink :to="localePath('/page/518')">
              {{ $t('nav.branch.charter') }}
            </NavLink>
            <NavLink :to="localePath('/page/520')">
              {{ $t('nav.branch.history') }}
            </NavLink>
            <NavLink :to="localePath('/page/1155')">
              {{ $t('nav.branch.structure') }}
            </NavLink>
            <NavLink :to="localePath('/page/527')">
              {{ $t('nav.branch.administration') }}
            </NavLink>
            <NavDropdown :title="$t('nav.branch.faculties.title')">
              <NavLink :to="localePath('/page/531')">
                {{ $t('nav.branch.faculties.directing_and_acting_skills') }}
              </NavLink>
              <NavLink :to="localePath('/page/551')">
                {{ $t('nav.branch.faculties.social_and_humanities_sciences') }}
              </NavLink>
              <NavLink :to="localePath('/page/566')">
                {{ $t('nav.branch.faculties.texnogen') }}
              </NavLink>
              <NavLink :to="localePath('/page/571')">
                {{ $t('nav.branch.faculties.folk_art_culture') }}
              </NavLink>
              <NavLink :to="localePath('/page/1298')">
                {{ $t('nav.branch.faculties.culture_and_library_activities') }}
              </NavLink>
            </NavDropdown>
            <NavDropdown :title="$t('nav.branch.center_and_divisions.title')">
              <NavLink :to="localePath('/page/1304')">
                {{ $t('nav.branch.center_and_divisions.center_of_information_resource') }}
              </NavLink>
              <NavLink :to="localePath('/page/1309')">
                {{ $t('nav.branch.center_and_divisions.center_of_information_technologies') }}
              </NavLink>
              <NavLink :to="localePath('/page/1315')">
                {{ $t('nav.branch.center_and_divisions.department_of_international_relations') }}
              </NavLink>
              <NavLink :to="localePath('/page/1322')">
                {{
                  $t('nav.branch.center_and_divisions.department_of_monitoring_and_internal_control')
                }}
              </NavLink>
              <NavLink :to="localePath('/page/1328')">
                {{ $t('nav.branch.center_and_divisions.department_of_quality') }}
              </NavLink>
              <NavLink :to="localePath('/page/1333')">
                {{ $t('nav.branch.center_and_divisions.department_of_youth') }}
              </NavLink>
              <NavLink :to="localePath('/page/1339')">
                {{ $t('nav.branch.center_and_divisions.educational_and_methodical_activities') }}
              </NavLink>
              <NavLink :to="localePath('/page/1344')">
                {{ $t('nav.branch.center_and_divisions.hr') }}
              </NavLink>
              <NavLink :to="localePath('/page/1349')">
                {{ $t('nav.branch.center_and_divisions.legal_counsel') }}
              </NavLink>
              <NavLink :to="localePath('/page/1353')">
                {{ $t('nav.branch.center_and_divisions.marketing') }}
              </NavLink>
              <NavLink :to="localePath('/page/1358')">
                {{ $t('nav.branch.center_and_divisions.office_department') }}
              </NavLink>
              <NavLink :to="localePath('/page/1362')">
                {{ $t('nav.branch.center_and_divisions.press_secretary') }}
              </NavLink>
              <NavLink :to="localePath('/page/1367')">
                {{ $t('nav.branch.center_and_divisions.scientific_department') }}
              </NavLink>
              <NavLink :to="localePath('/page/1371')">
                {{ $t('nav.branch.center_and_divisions.scientific_innovative') }}
              </NavLink>
              <NavLink :to="localePath('/page/1375')">
                {{ $t('nav.branch.center_and_divisions.trade_union') }}
              </NavLink>
              <NavLink :to="localePath('/page/1379')">
                {{ $t('nav.branch.center_and_divisions.womens_committee') }}
              </NavLink>
            </NavDropdown>
            <NavLink :to="localePath('/page/576')">
              {{ $t('nav.branch.vacancies') }}
            </NavLink>
          </NavDropdown>
          <!-- Branch END -->

          <!-- Activity -->
          <NavDropdown :title="$t('nav.activity.title')">
            <NavDropdown :title="$t('nav.activity.financial_activity')">
              <NavLink :to="localePath('/page/1188')">
                {{ $t('nav.activity.alumni_monitoring') }}
              </NavLink>
              <NavLink :to="localePath('/page/1191')">
                {{ $t('nav.activity.job_placement') }}
              </NavLink>
              <NavLink :to="localePath('/page/1195')">
                {{ $t('nav.activity.marketing') }}
              </NavLink>
              <NavLink :to="localePath('/page/1198')">
                {{ $t('nav.activity.sample_of_contracts') }}
              </NavLink>
            </NavDropdown>
            <NavDropdown :title="$t('nav.activity.culture_and_educational_activities')">
              <NavLink :to="localePath('/page/1202')">
                {{ $t('nav.activity.culture_and_educational_activities') }}
              </NavLink>
              <NavLink :to="localePath('/page/1205')">
                {{ $t('nav.activity.sports_events') }}
              </NavLink>
              <NavLink :to="localePath('/page/1208')">
                {{ $t('nav.activity.student_life') }}
              </NavLink>
              <NavLink :to="localePath('/page/1211')">
                {{ $t('nav.activity.youth_union') }}
              </NavLink>
            </NavDropdown>
          </NavDropdown>
          <!-- Activity END -->

          <!-- Applicants -->
          <NavDropdown :title="$t('nav.applicants.title')">
            <NavLink :to="localePath('/page/1389')">
              {{ $t('nav.applicants.be_aware') }}
            </NavLink>
            <NavLink :to="localePath('/page/1393')">
              {{ $t('nav.applicants.notes_of_applicants') }}
            </NavLink>
            <NavLink :to="localePath('/page/1397')">
              {{ $t('nav.applicants.privileges') }}
            </NavLink>
            <NavLink :to="localePath('/page/1403')">
              {{ $t('nav.applicants.admission_quota') }}
            </NavLink>
            <NavLink :to="localePath('/page/1408')">
              {{ $t('nav.applicants.admission_to_distance_learning') }}
            </NavLink>
            <NavLink :to="localePath('/page/1412')">
              {{ $t('nav.applicants.foreign_applicants') }}
            </NavLink>
            <NavLink :to="localePath('/page/1416')">
              {{ $t('nav.applicants.admission_commission') }}
            </NavLink>
            <NavLink :to="localePath('/page/1420')">
              {{ $t('nav.applicants.admission_monitoring') }}
            </NavLink>
            <NavLink :to="localePath('/page/1424')">
              {{ $t('nav.applicants.package_of_documents') }}
            </NavLink>
            <NavLink :to="localePath('/page/1428')">
              {{ $t('nav.applicants.list_of_exam_subjects') }}
            </NavLink>
            <NavLink :to="localePath('/page/1433')">
              {{ $t('nav.applicants.creative_exam_requirements') }}
            </NavLink>
            <NavDropdown :title="$t('nav.applicants.test_exam_results')">
              <NavLink :to="localePath('/page/1443')">
                5350600 - Kutubxona-axborot faoliyati (Faoliyat turlari bo’yicha) – Kunduzgi
              </NavLink>
              <NavLink :to="localePath('/page/1451')">
                5350600 - Kutubxona-axborot faoliyati (Faoliyat turlari bo’yicha) – Sirtqi
              </NavLink>
              <NavLink :to="localePath('/page/1458')">
                5151700 – Madaniyat va san’at muassasalarini tashkil etish hamda boshqarish – Kunduzgi
              </NavLink>
              <NavLink :to="localePath('/page/1464')">
                5151700 – Madaniyat va san’at muassasalarini tashkil etish hamda boshqarish – Sirtqi
              </NavLink>
              <NavLink :to="localePath('/page/1469')">Imtiyoz</NavLink>
            </NavDropdown>
            <NavDropdown :title="$t('nav.applicants.creative_exam_results')">
              <NavLink :to="localePath('/page/1474')">
                5111011 – Professional ta’limi (5151600 Xalq ijodiyoti Vokal ijrochiligi) – Kunduzgi
              </NavLink>
              <NavLink :to="localePath('/page/1480')">
                5150207 – San’atshunoslik (Saxna va ekran san’ati dramaturgiyasi) – Kunduzgi
              </NavLink>
              <NavLink :to="localePath('/page/1485')">
                5150207 – San’atshunoslik (Saxna va ekran san’ati dramaturgiyasi) – Sirtqi
              </NavLink>
              <NavLink :to="localePath('/page/1490')">
                5150302 – Aktyorlik san’ati (Musiqali teatr aktorligi) – Kunduzgi
              </NavLink>
              <NavLink :to="localePath('/page/1498')">
                5150400 – Rejissyorlik (Musiqiy teatr rejissyorligi) – Kunduzgi
              </NavLink>
              <NavLink :to="localePath('/page/1504')">
                5151400 – Texnogen san’ati (Kino, televideniye va radio ovoz rejissyorligi) – Kunduzgi
              </NavLink>
              <NavLink :to="localePath('/page/1511')">
                5151500 – Kino-teleoperatorlik – Kunduzgi
              </NavLink>
              <NavLink :to="localePath('/page/1517')">
                5151600 – Xalq ijodiyoti (Ashula va raqs) – Kunduzgi
              </NavLink>
            </NavDropdown>
            <NavLink :to="localePath('/page/1437')">
              {{ $t('nav.applicants.statistics_of_passing_points') }}
            </NavLink>
          </NavDropdown>
          <!-- Applicants END -->

          <!-- Students -->
          <NavDropdown :title="$t('nav.students.title')">
            <NavLink :to="localePath('/page/761')">
              {{ $t('nav.students.instructions') }}
            </NavLink>
            <NavLink :to="localePath('/page/1523')">
              {{ $t('nav.students.gifted_students') }}
            </NavLink>
            <NavLink :to="localePath('/page/1529')">
              {{ $t('nav.students.class_schedul') }}
            </NavLink>
            <NavLink :to="localePath('/page/1533')">
              {{ $t('nav.students.mastering') }}
            </NavLink>
            <NavLink :to="localePath('/page/1537')">
              {{ $t('nav.students.attendance') }}
            </NavLink>
            <NavLink :to="localePath('/page/1541')">
              {{ $t('nav.students.protection_of_graduation_qualification_work') }}
            </NavLink>
          </NavDropdown>
          <!-- Students END -->

          <!-- Interactive services -->
          <NavDropdown :title="$t('nav.interactive_services.title')">
            <a href="https://ariza.uzdsmi-nf.uz/">
              {{ $t('nav.interactive_services.electronic_acceptance_of_applicants_applications') }}
            </a>
            <NavLink :to="localePath('/student-information')">
              {{ $t('nav.interactive_services.get_a_student_certificate') }}
            </NavLink>
            <NavLink :to="localePath('/diploma-confirmation')">
              {{ $t('nav.interactive_services.higher_education_diploma_confirmation') }}
            </NavLink>
            <NavLink :to="localePath('/page/1546')">
              {{
                $t('nav.interactive_services.possibility_to_get_an_electronic_copy_of_the_diploma')
              }}
            </NavLink>
            <NavLink :to="localePath('/')">
              {{
                $t('nav.interactive_services.electronic_submission_of_articles_to_conferences_and_scientific_journals')
              }}
            </NavLink>
            <NavLink :to="localePath('/announcements/449')">
              {{ $t('nav.interactive_services.vacancies') }}
            </NavLink>
            <NavLink :to="localePath('/online-reception')">
              {{ $t('nav.interactive_services.sign_up_for_a_leaders_appointment') }}
            </NavLink>
            <NavLink :to="localePath('/check-contract')">
              {{ $t('nav.interactive_services.determining_the_amount_of_payment_contract') }}
            </NavLink>
            <a href="https://ariza.uzdsmi-nf.uz">
              {{ $t('nav.interactive_services.stratified_payment_contract') }}
            </a>
          </NavDropdown>
          <!-- Interactive services END -->

          <!-- Normative-Legal documents -->
          <NavDropdown :title="$t('nav.normative_legal_documents.title')">
            <NavLink :to="localePath('/page/721')">
              {{ $t('nav.normative_legal_documents.presidential_decrees_and_resolutions') }}
            </NavLink>
            <NavLink :to="localePath('/page/736')">
              {{ $t('nav.normative_legal_documents.government_decisions_and_programs') }}
            </NavLink>
            <NavLink :to="localePath('/page/727')">
              {{ $t('nav.normative_legal_documents.normative_legal_and_executive_documents') }}
            </NavLink>
          </NavDropdown>
          <!-- Normative-Legal documents END -->
        </nav>
      </div>
    </Container>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import NavLink from '@/components/NavLink'
import NavDropdown from '@/components/NavDropdown'
import Container from '@/components/Container'

export default {
  components: {
    Logo,
    NavLink,
    NavDropdown,
    Container
  },
  data() {
    return {
      navIsOpen: false,
    }
  },
}
</script>

<style scoped>
  a {
    @apply block px-4 py-2 mt-2 font-semibold text-sm text-black rounded;

    @screen md {
      @apply mt-0;
    }
  }

  a:hover {
    @apply bg-blue-500 text-white no-underline;
  }

  a:focus {
    @apply outline-none shadow-md;
  }
</style>
