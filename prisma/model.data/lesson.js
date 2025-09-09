const lessons = [
    {
        title: "វិធីសាស្ត្រប្រមូលទិន្នន័យបឋម",
        order_number: 1,
        key_takeaway_text: "ការប្រមូលទិន្នន័យបឋមរួមមានការស្ទង់មតិផ្ទាល់ ការសម្ភាសន៍ និងការសង្កេតផ្ទាល់។",
        isCompleted: false,
        courseContentId: 2,
        slug: "primary-data-collection-methods"
    },
    {
        title: "វិធីសាស្ត្រប្រមូលទិន្នន័យបន្ទាប់បន្សំ",
        order_number: 2,
        key_takeaway_text: "ការប្រមូលទិន្នន័យបន្ទាប់បន្សំរួមមានការប្រើប្រាស់ទិន្នន័យដែលមានស្រាប់ពីប្រភពខាងក្រៅ ដូចជារបាយការណ៍ និងទិន្នន័យរដ្ឋាភិបាល។",
        isCompleted: false,
        courseContentId: 2,
        slug: "secondary-data-collection-methods"
    },
    {
        title: "ការរចនាកម្រងសំណួរ",
        order_number: 3,
        key_takeaway_text: "កម្រងសំណួរត្រូវតែរចនាឡើងដើម្បីឱ្យច្បាស់លាស់ ងាយស្រួលយល់ និងគ្មានភាពលម្អៀង។",
        isCompleted: false,
        courseContentId: 2,
        slug: "questionnaire-design"
    },
    {
        title: "ការប្រព្រឹត្តការសម្ភាសន៍",
        order_number: 4,
        key_takeaway_text: "ការសម្ភាសន៍អាចមានលក្ខណៈរចនាសម្ព័ន្ធ ឬពាក់កណ្តាលរចនាសម្ព័ន្ធ ហើយតម្រូវឱ្យមានជំនាញក្នុងការស្តាប់ និងការសួរ។",
        isCompleted: false,
        courseContentId: 2,
        slug: "conducting-interviews"
    },
    {
        title: "ការសម្អាតទិន្នន័យ",
        order_number: 1,
        key_takeaway_text: "ការសម្អាតទិន្នន័យរួមបញ្ចូលទាំងការដោះស្រាយទិន្នន័យដែលបាត់បង់ និងតម្លៃខុសពីធម្មតា។",
        isCompleted: false,
        courseContentId: 3,
        slug: "data-cleaning"
    },
    {
        title: "ការធ្វើទ្រង់ទ្រាយទិន្នន័យ",
        order_number: 2,
        key_takeaway_text: "ការធ្វើទ្រង់ទ្រាយទិន្នន័យជួយឱ្យទិន្នន័យរបស់អ្នកមានលក្ខណៈដូចគ្នា។",
        isCompleted: false,
        courseContentId: 3,
        slug: "data-formatting"
    },
    {
        title: "ការរៀបចំតារាង",
        order_number: 3,
        key_takeaway_text: "តារាងជួយយើងក្នុងការបង្ហាញទិន្នន័យឱ្យមានលក្ខណៈងាយស្រួលមើល និងយល់។",
        isCompleted: false,
        courseContentId: 3,
        slug: "table-creation"
    },
    {
        title: "ការបង្កើតក្រាហ្វ",
        order_number: 4,
        key_takeaway_text: "ក្រាហ្វអនុញ្ញាតឱ្យយើងបង្ហាញទិន្នន័យជាលក្ខណៈរូបភាព។",
        isCompleted: false,
        courseContentId: 3,
        slug: "graph-creation"
    },
    {
        title: "មធ្យម (Mean)",
        order_number: 1,
        key_takeaway_text: "មធ្យមគឺជាមធ្យមនព្វន្ធនៃសំណុំទិន្នន័យ។ វាត្រូវបានគណនាដោយការបូកសរុបទិន្នន័យទាំងអស់ ហើយចែកនឹងចំនួនទិន្នន័យ។",
        isCompleted: false,
        courseContentId: 4,
        slug: "mean"
    },
    {
        title: "ឌីយ៉ង់ (Median)",
        order_number: 2,
        key_takeaway_text: "ឌីយ៉ង់គឺជាតម្លៃកណ្តាលនៃសំណុំទិន្នន័យ។ វាត្រូវបានប្រើនៅពេលដែលមានតម្លៃខុសពីធម្មតា។",
        isCompleted: false,
        courseContentId: 4,
        slug: "median"
    },
    {
        title: "មូលដ្ឋាន (Mode)",
        order_number: 3,
        key_takeaway_text: "មូលដ្ឋានគឺជាតម្លៃដែលកើតឡើងញឹកញាប់បំផុតនៅក្នុងសំណុំទិន្នន័យ។",
        isCompleted: false,
        courseContentId: 4,
        slug: "mode"
    },
    {
        title: "ការសាកល្បងសម្មតិកម្ម Null និង Alternative",
        order_number: 1,
        key_takeaway_text: "ការសាកល្បងសម្មតិកម្មចាប់ផ្តើមដោយការកំណត់សម្មតិកម្ម Null (H0) និងសម្មតិកម្ម Alternative (H1) ។",
        isCompleted: false,
        courseContentId: 7,
        slug: "null-and-alternative-hypothesis-testing"
    },
    {
        title: "កម្រិតសារៈសំខាន់ (Alpha Level)",
        order_number: 2,
        key_takeaway_text: "Alpha Level (${\\alpha}$) គឺជាកម្រិតហានិភ័យដែលយើងត្រៀមខ្លួនទទួលយកក្នុងការបដិសេធសម្មតិកម្ម Null ខុស។",
        isCompleted: false,
        courseContentId: 7,
        slug: "alpha-level"
    },
    {
        title: "តម្លៃ P-Value",
        order_number: 3,
        key_takeaway_text: "P-Value គឺជាប្រូបាប៊ីលីតេនៃការទទួលបានលទ្ធផលស្រាវជ្រាវ។",
        isCompleted: false,
        courseContentId: 7,
        slug: "p-value"
    },
    {
        title: "ប្រភេទនៃកំហុស (Errors)",
        order_number: 4,
        key_takeaway_text: "មានកំហុសពីរប្រភេទ៖ កំហុសប្រភេទទី ១ (Type I Error) និងកំហុសប្រភេទទី ២ (Type II Error) ។",
        isCompleted: false,
        courseContentId: 7,
        slug: "types-of-errors"
    },
    {
        title: "ការគណនាមធ្យមភាគរបស់គំរូ",
        order_number: 1,
        key_takeaway_text: "មធ្យមភាគគំរូគឺជាមធ្យមនៃទិន្នន័យដែលបានមកពីសំណាក។ វាត្រូវបានប្រើដើម្បីព្យាករណ៍អំពីមធ្យមភាគរបស់ប្រជាជន។",
        isCompleted: false,
        courseContentId: 8,
        slug: "calculating-sample-mean"
    },
    {
        title: "ការគណនាមធ្យមភាគរបស់ប្រជាជន",
        order_number: 2,
        key_takeaway_text: "មធ្យមភាគប្រជាជនគឺជាមធ្យមនៃទិន្នន័យពីក្រុមទាំងមូល។ វាមិនអាចគណនាដោយផ្ទាល់បានទេ ដូច្នេះយើងត្រូវប្រើមធ្យមភាគគំរូដើម្បីប៉ាន់ស្មាន។",
        isCompleted: false,
        courseContentId: 8,
        slug: "calculating-population-mean"
    },
    {
        title: "ភាពខុសគ្នារវាងមធ្យមភាគគំរូនិងប្រជាជន",
        order_number: 3,
        key_takeaway_text: "ដោយសារគំរូគ្រាន់តែជាផ្នែកតូចមួយនៃប្រជាជន ភាពខុសគ្នាតែងតែកើតឡើងរវាងមធ្យមភាគទាំងពីរ។ ការវិភាគស្ថិតិជួយយើងកំណត់ថាតើភាពខុសគ្នានេះមានសារៈសំខាន់ឬអត់។",
        isCompleted: false,
        courseContentId: 8,
        slug: "sample-vs-population-mean-difference"
    },
    {
        title: "លក្ខខណ្ឌប្រើប្រាស់ T-Test",
        order_number: 1,
        key_takeaway_text: "T-Test ត្រូវបានប្រើនៅពេលដែលទំហំគំរូតូច ($n < 30$) និងនៅពេលដែលគម្លាតស្តង់ដាររបស់ប្រជាជនមិនត្រូវបានគេដឹង។",
        isCompleted: false,
        courseContentId: 9,
        slug: "t-test-conditions"
    },
    {
        title: "ប្រភេទនៃ T-Test",
        order_number: 2,
        key_takeaway_text: "មាន T-Test បីប្រភេទសំខាន់ៗ៖ T-test សម្រាប់គំរូតែមួយ (One-Sample T-test) T-test សម្រាប់គំរូពីរដែលមានលក្ខណៈឯករាជ្យ (Independent Samples T-test) និង T-test សម្រាប់គំរូពីរដែលមានលក្ខណៈគូ (Paired Samples T-test) ។",
        isCompleted: false,
        courseContentId: 9,
        slug: "types-of-t-tests"
    },
    {
        title: "ការបកស្រាយលទ្ធផល T-Test",
        order_number: 3,
        key_takeaway_text: "ប្រសិនបើ P-value ដែលបានមកពី T-test គឺតិចជាងកម្រិត alpha (ឧ. 0.05) យើងបដិសេធសម្មតិកម្ម Null ហើយសន្និដ្ឋានថាមានភាពខុសគ្នាដែលមានសារៈសំខាន់រវាងក្រុម។",
        isCompleted: false,
        courseContentId: 9,
        slug: "interpreting-t-test-results"
    },
    {
        title: "ការវិភាគ ANOVA សាមញ្ញ (One-Way ANOVA)",
        order_number: 1,
        key_takeaway_text: "One-Way ANOVA ត្រូវបានប្រើដើម្បីប្រៀបធៀបមធ្យមភាគនៃក្រុមបី ឬច្រើនដែលមានអថេរឯករាជ្យតែមួយ។",
        isCompleted: false,
        courseContentId: 10,
        slug: "one-way-anova-analysis"
    },
    {
        title: "ការវិភាគ ANOVA បែប Repeated Measures",
        order_number: 2,
        key_takeaway_text: "Repeated Measures ANOVA ត្រូវបានប្រើនៅពេលដែលអ្នកមានទិន្នន័យពីក្រុមដូចគ្នាក្នុងចំណុចពេលវេលាជាច្រើន។",
        isCompleted: false,
        courseContentId: 10,
        slug: "repeated-measures-anova"
    },
    {
        title: "ការបកស្រាយលទ្ធផល ANOVA",
        order_number: 3,
        key_takeaway_text: "ប្រសិនបើលទ្ធផល ANOVA គឺមានសារៈសំខាន់ យើងអាចសន្និដ្ឋានថាមានភាពខុសគ្នាដែលមានសារៈសំខាន់រវាងមធ្យមភាគនៃក្រុមយ៉ាងហោចណាស់ពីរ។",
        isCompleted: false,
        courseContentId: 10,
        slug: "interpreting-anova-results"
    },
    {
        title: "គោលគំនិត Multiple Linear Regression",
        order_number: 1,
        key_takeaway_text: "Multiple Linear Regression ត្រូវបានប្រើដើម្បីសិក្សាពីឥទ្ធិពលនៃអថេរឯករាជ្យច្រើន។",
        isCompleted: false,
        courseContentId: 13,
        slug: "multiple-linear-regression-concept"
    },
    {
        title: "ការគណនាទំនាក់ទំនងជាមួយអថេរច្រើន",
        order_number: 2,
        key_takeaway_text: "ម៉ូដែលនេះអនុញ្ញាតឱ្យយើងទស្សន៍ទាយលទ្ធផលដោយប្រើអថេរចូលច្រើន។",
        isCompleted: false,
        courseContentId: 13,
        slug: "multiple-variable-relationships"
    },
    {
        title: "ការបកស្រាយ Coefficients ច្រើន",
        order_number: 3,
        key_takeaway_text: "Coefficient នីមួយៗបង្ហាញពីឥទ្ធិពលរបស់អថេរនីមួយៗលើអថេរអាស្រ័យ។",
        isCompleted: false,
        courseContentId: 13,
        slug: "interpreting-multiple-coefficients"
    },
    {
        title: "ការវាស់វែងភាពត្រឹមត្រូវ",
        order_number: 1,
        key_takeaway_text: "យើងវាយតម្លៃម៉ូដែលដោយប្រើ R-squared ដែលបង្ហាញពីភាគរយនៃបំរែបំរួលនៅក្នុងអថេរអាស្រ័យដែលត្រូវបានពន្យល់ដោយអថេរឯករាជ្យ។",
        isCompleted: false,
        courseContentId: 14,
        slug: "accuracy-measurement"
    },
    {
        title: "ការបកស្រាយ R-squared",
        order_number: 2,
        key_takeaway_text: "R-squared ខ្ពស់បង្ហាញថាម៉ូដែលរបស់យើងសមនឹងទិន្នន័យ។",
        isCompleted: false,
        courseContentId: 14,
        slug: "interpreting-r-squared"
    },
    {
        title: "ការវិភាគ Residuals",
        order_number: 3,
        key_takeaway_text: "ការវិភាគ residual plots ជួយយើងកំណត់ថាតើម៉ូដែលរបស់យើងសមស្របនឹងទិន្នន័យឬអត់។",
        isCompleted: false,
        courseContentId: 14,
        slug: "analyzing-residuals"
    },
    {
        title: "គោលការណ៍ Simple Random Sampling",
        order_number: 1,
        key_takeaway_text: "វិធីសាស្ត្រនេះផ្តល់ឱកាសដូចគ្នាដល់សមាជិកទាំងអស់នៃប្រជាជនដើម្បីត្រូវបានជ្រើសរើស។",
        isCompleted: false,
        courseContentId: 15,
        slug: "simple-random-sampling-principles"
    },
    {
        title: "គុណសម្បត្តិនិងគុណវិបត្តិ",
        order_number: 2,
        key_takeaway_text: "គុណសម្បត្តិគឺភាពអព្យាក្រឹត ខណៈដែលគុណវិបត្តិគឺវាអាចត្រូវការបញ្ជីសមាជិកពេញលេញនៃប្រជាជន។",
        isCompleted: false,
        courseContentId: 15,
        slug: "advantages-and-disadvantages"
    },
    {
        title: "ឧទាហរណ៍ជាក់ស្តែង",
        order_number: 3,
        key_takeaway_text: "ឧទាហរណ៍ដូចជាការប្រើប្រាស់កម្មវិធីកុំព្យូទ័រដើម្បីបង្កើតលេខចៃដន្យសម្រាប់ជ្រើសរើសសំណាក។",
        isCompleted: false,
        courseContentId: 15,
        slug: "practical-examples-sampling"
    },
    {
        title: "គោលការណ៍ Stratified Sampling",
        order_number: 1,
        key_takeaway_text: "វិធីសាស្ត្រនេះបែងចែកប្រជាជនទៅជាក្រុមរង (strata)។",
        isCompleted: false,
        courseContentId: 18,
        slug: "stratified-sampling-principles"
    },
    {
        title: "ការជ្រើសរើសសំណាកពីក្រុមនីមួយៗ",
        order_number: 2,
        key_takeaway_text: "យើងជ្រើសរើសសំណាកពីក្រុមរងនីមួយៗដោយប្រើវិធី Simple Random ឬ Systematic។",
        isCompleted: false,
        courseContentId: 18,
        slug: "selecting-samples-from-strata"
    },
    {
        title: "គុណសម្បត្តិនិងគុណវិបត្តិ",
        order_number: 3,
        key_takeaway_text: "វាធានាថាសំណាកតំណាងឱ្យក្រុមរងទាំងអស់ ប៉ុន្តែវាត្រូវការចំណេះដឹងអំពីលក្ខណៈរបស់ប្រជាជនជាមុន។",
        isCompleted: false,
        courseContentId: 18,
        slug: "stratified-sampling-pros-cons"
    },
    {
        title: "គោលការណ៍ Cluster Sampling",
        order_number: 1,
        key_takeaway_text: "វិធីសាស្ត្រនេះបែងចែកប្រជាជនជាក្រុម (clusters)។",
        isCompleted: false,
        courseContentId: 19,
        slug: "cluster-sampling-principles"
    },
    {
        title: "ការជ្រើសរើសក្រុម",
        order_number: 2,
        key_takeaway_text: "យើងជ្រើសរើសក្រុមចៃដន្យមួយចំនួន ហើយសិក្សាសមាជិកទាំងអស់នៅក្នុងក្រុមដែលបានជ្រើសរើស។",
        isCompleted: false,
        courseContentId: 19,
        slug: "selecting-clusters"
    },
    {
        title: "គុណសម្បត្តិនិងគុណវិបត្តិ",
        order_number: 3,
        key_takeaway_text: "វាមានប្រសិទ្ធភាពនៅពេលដែលប្រជាជនមានទំហំធំ ប៉ុន្តែវាអាចមានកំហុសគំរូប្រសិនបើក្រុមមិនមានភាពចម្រុះ។",
        isCompleted: false,
        courseContentId: 19,
        slug: "cluster-sampling-pros-cons"
    },
    {
        title: "ការគណនាមធ្យមនិងឌីយ៉ង់",
        order_number: 1,
        key_takeaway_text: "SPSS ផ្តល់មុខងារងាយស្រួលសម្រាប់ការគណនាមធ្យម និងឌីយ៉ង់នៃទិន្នន័យរបស់អ្នក។",
        isCompleted: false,
        courseContentId: 21,
        slug: "calculating-mean-median-spss"
    },
    {
        title: "ការបង្កើតតារាងនិងក្រាហ្វ",
        order_number: 2,
        key_takeaway_text: "យើងអាចប្រើ SPSS ដើម្បីបង្កើតតារាងប្រេកង់ ក្រាហ្វរបារ និងក្រាហ្វរង្វង់។",
        isCompleted: false,
        courseContentId: 21,
        slug: "creating-tables-graphs-spss"
    },
    {
        title: "ការបកស្រាយលទ្ធផល",
        order_number: 3,
        key_takeaway_text: "យើងបកស្រាយលទ្ធផលដែលទទួលបានពី SPSS ដើម្បីទទួលបានការយល់ដឹងពីទិន្នន័យ។",
        isCompleted: false,
        courseContentId: 21,
        slug: "interpreting-spss-results"
    },
    {
        title: "ការអនុវត្ត T-Test",
        order_number: 1,
        key_takeaway_text: "យើងប្រើ SPSS ដើម្បីអនុវត្ត T-Test សម្រាប់ការប្រៀបធៀបមធ្យមភាគរវាងក្រុមពីរ។",
        isCompleted: false,
        courseContentId: 24,
        slug: "performing-t-test-spss"
    },
    {
        title: "ការអនុវត្ត ANOVA",
        order_number: 2,
        key_takeaway_text: "យើងប្រើ SPSS ដើម្បីអនុវត្ត ANOVA សម្រាប់ការប្រៀបធៀបមធ្យមភាគរវាងក្រុមច្រើនជាងពីរ។",
        isCompleted: false,
        courseContentId: 24,
        slug: "performing-anova-spss"
    },
    {
        title: "ការអនុវត្ត Correlation និង Regression",
        order_number: 3,
        key_takeaway_text: "យើងប្រើ SPSS ដើម្បីអនុវត្តការវិភាគ Correlation និង Regression ដើម្បីសិក្សាទំនាក់ទំនងរវាងអថេរ។",
        isCompleted: false,
        courseContentId: 24,
        slug: "performing-correlation-regression-spss"
    },
    {
        title: "ពាក្យបញ្ជាសម្រាប់ស្ថិតិពិពណ៌នា",
        order_number: 1,
        key_takeaway_text: "យើងប្រើពាក្យបញ្ជាដូចជា `summarize` និង `tabulate` ដើម្បីវិភាគស្ថិតិពិពណ៌នា។",
        isCompleted: false,
        courseContentId: 25,
        slug: "descriptive-statistics-stata-commands"
    },
    {
        title: "ការបង្កើតក្រាហ្វ",
        order_number: 2,
        key_takeaway_text: "STATA មានពាក្យបញ្ជាសម្រាប់ការបង្កើតក្រាហ្វផ្សេងៗគ្នាដូចជា bar charts និង histograms។",
        isCompleted: false,
        courseContentId: 25,
        slug: "creating-graphs-stata"
    },
    {
        title: "ការបកស្រាយលទ្ធផល",
        order_number: 3,
        key_takeaway_text: "យើងបកស្រាយលទ្ធផលដែលទទួលបានពី STATA ដើម្បីទទួលបានការយល់ដឹងពីទិន្នន័យ។",
        isCompleted: false,
        courseContentId: 25,
        slug: "interpreting-stata-results"
    },
    {
        title: "ពាក្យបញ្ជាសម្រាប់ Linear Regression",
        order_number: 1,
        key_takeaway_text: "យើងប្រើពាក្យបញ្ជា `regress` ដើម្បីអនុវត្ត Linear Regression។",
        isCompleted: false,
        courseContentId: 28,
        slug: "linear-regression-stata-command"
    },
    {
        title: "ពាក្យបញ្ជាសម្រាប់ Multiple Regression",
        order_number: 2,
        key_takeaway_text: "ពាក្យបញ្ជា `regress` អាចត្រូវបានប្រើជាមួយអថេរឯករាជ្យច្រើន។",
        isCompleted: false,
        courseContentId: 28,
        slug: "multiple-regression-stata-command"
    },
    {
        title: "ការបកស្រាយលទ្ធផល Regression",
        order_number: 3,
        key_takeaway_text: "យើងបកស្រាយ coefficients និង P-values ដើម្បីកំណត់សារៈសំខាន់នៃទំនាក់ទំនង។",
        isCompleted: false,
        courseContentId: 28,
        slug: "interpreting-regression-stata"
    },
    {
        title: "ការប្រើប្រាស់ R-Studio",
        order_number: 1,
        key_takeaway_text: "យើងប្រើ R-Studio ជាបរិស្ថានដើម្បីសរសេរ និងដំណើរការពាក្យបញ្ជា R។",
        isCompleted: false,
        courseContentId: 29,
        slug: "using-r-studio"
    },
    {
        title: "ការគណនាមធ្យមនិងឌីយ៉ង់",
        order_number: 2,
        key_takeaway_text: "យើងប្រើ functions ដូចជា `mean()` និង `median()` ដើម្បីវិភាគទិន្នន័យ។",
        isCompleted: false,
        courseContentId: 29,
        slug: "calculating-mean-median-r"
    },
    {
        title: "ការបង្កើតក្រាហ្វ",
        order_number: 3,
        key_takeaway_text: "យើងប្រើ packages ដូចជា ggplot2 ដើម្បីបង្កើតក្រាហ្វដ៏ស្រស់ស្អាត។",
        isCompleted: false,
        courseContentId: 29,
        slug: "creating-graphs-r"
    },
    {
        title: "ការអនុវត្ត T-Test",
        order_number: 1,
        key_takeaway_text: "យើងប្រើ function `t.test()` ដើម្បីអនុវត្ត T-Test ។",
        isCompleted: false,
        courseContentId: 32,
        slug: "performing-t-test-r"
    },
    {
        title: "ការអនុវត្ត ANOVA",
        order_number: 2,
        key_takeaway_text: "យើងប្រើ function `aov()` ដើម្បីអនុវត្ត ANOVA ។",
        isCompleted: false,
        courseContentId: 32,
        slug: "performing-anova-r"
    },
    {
        title: "ការអនុវត្ត Regression",
        order_number: 3,
        key_takeaway_text: "យើងប្រើ function `lm()` (linear model) ដើម្បីអនុវត្ត Regression ។",
        isCompleted: false,
        courseContentId: 32,
        slug: "performing-regression-r"
    },
    {
        title: "ការប្រើប្រាស់រូបមន្តស្ថិតិ",
        order_number: 1,
        key_takeaway_text: "Excel មានរូបមន្តដែលភ្ជាប់មកជាមួយសម្រាប់ការគណនាស្ថិតិពិពណ៌នា។",
        isCompleted: false,
        courseContentId: 33,
        slug: "using-statistical-formulas-excel"
    },
    {
        title: "ការប្រើប្រាស់ Data Analysis Toolpak",
        order_number: 2,
        key_takeaway_text: "Toolpak ផ្តល់មុខងារសម្រាប់ការវិភាគដូចជា Descriptive Statistics និង ANOVA។",
        isCompleted: false,
        courseContentId: 33,
        slug: "using-data-analysis-toolpak"
    },
    {
        title: "ការបកស្រាយលទ្ធផល",
        order_number: 3,
        key_takeaway_text: "យើងបកស្រាយលទ្ធផលដែលទទួលបានពី Excel ដើម្បីទទួលបានការយល់ដឹងពីទិន្នន័យ។",
        isCompleted: false,
        courseContentId: 33,
        slug: "interpreting-excel-results"
    },
    {
        title: "ការកំណត់បញ្ហាស្រាវជ្រាវ",
        order_number: 1,
        key_takeaway_text: "បញ្ហាស្រាវជ្រាវ គឺជាអ្វីដែលការស្រាវជ្រាវរបស់អ្នកចង់ដោះស្រាយ។ វាត្រូវតែច្បាស់លាស់ និងជាក់លាក់។",
        isCompleted: false,
        courseContentId: 36,
        slug: "defining-the-research-problem"
    },
    {
        title: "របៀបសរសេរបញ្ហាស្រាវជ្រាវ",
        order_number: 2,
        key_takeaway_text: "បញ្ហាស្រាវជ្រាវគួរតែត្រូវបានសរសេរជាសំណួរ ឬសេចក្តីថ្លែងការណ៍ដែលមានលក្ខណៈជាក់លាក់។",
        isCompleted: false,
        courseContentId: 36,
        slug: "how-to-write-a-research-problem"
    },
    {
        title: "ឧទាហរណ៍នៃបញ្ហាស្រាវជ្រាវ",
        order_number: 3,
        key_takeaway_text: "ឧទាហរណ៍: \"តើការប្រើប្រាស់បច្ចេកវិទ្យាមានឥទ្ធិពលលើលទ្ធផលសិក្សារបស់សិស្សដែរឬទេ?\"",
        isCompleted: false,
        courseContentId: 36,
        slug: "example-of-research-problem"
    },
    {
        title: "គោលបំណងនៃការពិនិត្យអក្សរសិល្ប៍",
        order_number: 1,
        key_takeaway_text: "ការពិនិត្យអក្សរសិល្ប៍ជួយអ្នកយល់ពីការស្រាវជ្រាវពីមុន និងកំណត់ពីចំណុចខ្វះខាត។",
        isCompleted: false,
        courseContentId: 37,
        slug: "purpose-of-literature-review"
    },
    {
        title: "ជំហានក្នុងការពិនិត្យអក្សរសិល្ប៍",
        order_number: 2,
        key_takeaway_text: "ជំហានរួមមានការស្វែងរកប្រភព ការវាយតម្លៃប្រភព និងការសង្ខេបការស្រាវជ្រាវដែលពាក់ព័ន្ធ។",
        isCompleted: false,
        courseContentId: 37,
        slug: "steps-in-literature-review"
    },
    {
        title: "របៀបសរសេរបញ្ហាស្រាវជ្រាវ",
        order_number: 3,
        key_takeaway_text: "ការពិនិត្យអក្សរសិល្ប៍គួរតែមានលក្ខណៈវិភាគ និងប្រៀបធៀប។",
        isCompleted: false,
        courseContentId: 37,
        slug: "how-to-write-literature-review"
    },
    {
        title: "ការរចនាការស្រាវជ្រាវ",
        order_number: 1,
        key_takeaway_text: "ការរចនាការស្រាវជ្រាវគឺជាផែនការដែលរៀបរាប់ពីរបៀបដែលការស្រាវជ្រាវនឹងត្រូវបានអនុវត្ត។",
        isCompleted: false,
        courseContentId: 40,
        slug: "research-design-quantitative"
    },
    {
        title: "វិធីសាស្ត្រប្រមូលទិន្នន័យ",
        order_number: 2,
        key_takeaway_text: "យើងត្រូវជ្រើសរើសវិធីសាស្ត្រត្រឹមត្រូវសម្រាប់ការប្រមូលទិន្នន័យដូចជាការស្ទង់មតិ ការសម្ភាសន៍។",
        isCompleted: false,
        courseContentId: 40,
        slug: "data-collection-methods-quantitative"
    },
    {
        title: "វិធីសាស្ត្រវិភាគទិន្នន័យ",
        order_number: 3,
        key_takeaway_text: "វិធីសាស្ត្រវិភាគទិន្នន័យរួមមានទាំងស្ថិតិពិពណ៌នា និងស្ថិតិសន្និដ្ឋាន។",
        isCompleted: false,
        courseContentId: 40,
        slug: "data-analysis-methods-quantitative"
    },
    {
        title: "ការរចនាការស្រាវជ្រាវបែបពិសោធន៍",
        order_number: 1,
        key_takeaway_text: "ការរចនាបែបពិសោធន៍ ប្រើក្រុមត្រួតពិនិត្យ និងក្រុមព្យាបាលដើម្បីសាកល្បងសម្មតិកម្ម។",
        isCompleted: false,
        courseContentId: 41,
        slug: "experimental-research-design"
    },
    {
        title: "ការរចនាការស្រាវជ្រាវបែបស្ទង់មតិ",
        order_number: 2,
        key_takeaway_text: "ការរចនាបែបស្ទង់មតិ ប្រើកម្រងសំណួរដើម្បីប្រមូលទិន្នន័យពីសំណាកធំ។",
        isCompleted: false,
        courseContentId: 41,
        slug: "survey-research-design"
    },
    {
        title: "គុណសម្បត្តិនិងគុណវិបត្តិ",
        order_number: 3,
        key_takeaway_text: "ការស្រាវជ្រាវបែបបរិមាណមានភាពងាយស្រួលក្នុងការវិភាគ ប៉ុន្តែវាអាចខ្វះការយល់ដឹងស៊ីជម្រៅ។",
        isCompleted: false,
        courseContentId: 41,
        slug: "quantitative-research-pros-cons"
    },
    {
        title: "ឧបករណ៍ប្រមូលទិន្នន័យ",
        order_number: 1,
        key_takeaway_text: "យើងប្រើឧបករណ៍ដូចជាការស្ទង់មតិតាមអ៊ីនធឺណិត និងកម្មវិធីសម្រាប់ទិន្នន័យ។",
        isCompleted: false,
        courseContentId: 42,
        slug: "data-collection-tools-quantitative"
    },
    {
        title: "ការរៀបចំទិន្នន័យ",
        order_number: 2,
        key_takeaway_text: "យើងត្រូវសម្អាតទិន្នន័យ និងធ្វើឱ្យវាមានទ្រង់ទ្រាយត្រឹមត្រូវមុនពេលវិភាគ។",
        isCompleted: false,
        courseContentId: 42,
        slug: "data-preparation-quantitative"
    },
    {
        title: "ការវិភាគទិន្នន័យ",
        order_number: 3,
        key_takeaway_text: "យើងប្រើស្ថិតិពិពណ៌នា និងសន្និដ្ឋានដើម្បីវិភាគទិន្នន័យបរិមាណ។",
        isCompleted: false,
        courseContentId: 42,
        slug: "data-analysis-quantitative"
    },
    {
        title: "ការរចនាការស្រាវជ្រាវបែប Case Study",
        order_number: 1,
        key_takeaway_text: "Case Study ផ្តោតលើការសិក្សាពីបុគ្គល ឬក្រុមណាមួយឱ្យបានស៊ីជម្រៅ។",
        isCompleted: false,
        courseContentId: 45,
        slug: "case-study-research-design"
    },
    {
        title: "ការរចនាការស្រាវជ្រាវបែប Ethnography",
        order_number: 2,
        key_takeaway_text: "Ethnography ផ្តោតលើការសិក្សាពីវប្បធម៌ ឬក្រុមសង្គមណាមួយ។",
        isCompleted: false,
        courseContentId: 45,
        slug: "ethnography-research-design"
    },
    {
        title: "គុណសម្បត្តិនិងគុណវិបត្តិ",
        order_number: 3,
        key_takeaway_text: "ការស្រាវជ្រាវបែបគុណភាពផ្តល់ការយល់ដឹងស៊ីជម្រៅ ប៉ុន្តែមិនអាចធ្វើទូទៅទៅប្រជាជនធំបានទេ។",
        isCompleted: false,
        courseContentId: 45,
        slug: "qualitative-research-pros-cons"
    },
    {
        title: "ឧបករណ៍ប្រមូលទិន្នន័យ",
        order_number: 1,
        key_takeaway_text: "យើងប្រើឧបករណ៍ដូចជាការសម្ភាសន៍ស៊ីជម្រៅ និងការផ្តោតក្រុម (focus group)។",
        isCompleted: false,
        courseContentId: 46,
        slug: "data-collection-tools-qualitative"
    },
    {
        title: "ការរៀបចំទិន្នន័យ",
        order_number: 2,
        key_takeaway_text: "យើងត្រូវបំប្លែងទិន្នន័យសំឡេងទៅជាអត្ថបទ (transcribe) មុនពេលវិភាគ។",
        isCompleted: false,
        courseContentId: 46,
        slug: "data-preparation-qualitative"
    },
    {
        title: "ការវិភាគទិន្នន័យ",
        order_number: 3,
        key_takeaway_text: "យើងប្រើវិធីសាស្ត្រដូចជា Thematic Analysis ដើម្បីរកចំណុចសំខាន់ៗ។",
        isCompleted: false,
        courseContentId: 46,
        slug: "data-analysis-qualitative"
    },
    {
        title: "ការរចនាបែប Sequential",
        order_number: 1,
        key_takeaway_text: "យើងចាប់ផ្តើមដោយប្រមូលទិន្នន័យបរិមាណមុន ហើយបន្ទាប់មកទិន្នន័យគុណភាព។",
        isCompleted: false,
        courseContentId: 49,
        slug: "sequential-design"
    },
    {
        title: "ការរចនាបែប Concurrent",
        order_number: 2,
        key_takeaway_text: "យើងប្រមូលទិន្នន័យទាំងពីរប្រភេទក្នុងពេលតែមួយ។",
        isCompleted: false,
        courseContentId: 49,
        slug: "concurrent-design"
    },
    {
        title: "គុណសម្បត្តិនិងគុណវិបត្តិ",
        order_number: 3,
        key_takeaway_text: "ការស្រាវជ្រាវ Mixed Method ផ្តល់ការយល់ដឹងស៊ីជម្រៅ ប៉ុន្តែមានភាពស្មុគស្មាញក្នុងការរចនា។",
        isCompleted: false,
        courseContentId: 49,
        slug: "mixed-method-pros-cons"
    },
    {
        title: "ការប្រមូលទិន្នន័យទាំងពីរប្រភេទ",
        order_number: 1,
        key_takeaway_text: "យើងត្រូវរៀបចំផែនការដើម្បីប្រមូលទិន្នន័យបរិមាណ និងគុណភាព។",
        isCompleted: false,
        courseContentId: 50,
        slug: "collecting-both-data-types"
    },
    {
        title: "ការវិភាគទិន្នន័យ",
        order_number: 2,
        key_takeaway_text: "យើងត្រូវបង្រួមលទ្ធផលវិភាគទាំងពីរប្រភេទដើម្បីទទួលបានការយល់ដឹងស៊ីជម្រៅ។",
        isCompleted: false,
        courseContentId: 50,
        slug: "analyzing-both-data-types"
    },
    {
        title: "ការបកស្រាយលទ្ធផល",
        order_number: 3,
        key_takeaway_text: "យើងបកស្រាយលទ្ធផលវិភាគទាំងពីរប្រភេទដើម្បីទទួលបានការយល់ដឹង។",
        isCompleted: false,
        courseContentId: 50,
        slug: "interpreting-mixed-method-results"
    },
    {
        title: "ការកំណត់បញ្ហាស្រាវជ្រាវ",
        order_number: 1,
        key_takeaway_text: "បញ្ហាស្រាវជ្រាវ គឺជាចំណុចកណ្តាលនៃរបាយការណ៍របស់អ្នក។ វាត្រូវតែច្បាស់លាស់ និងជាក់លាក់។",
        isCompleted: false,
        courseContentId: 53,
        slug: "defining-the-research-problem-report"
    },
    {
        title: "របៀបសរសេរបញ្ហាស្រាវជ្រាវ",
        order_number: 2,
        key_takeaway_text: "បញ្ហាស្រាវជ្រាវគួរតែត្រូវបានសរសេរជាសំណួរ ឬសេចក្តីថ្លែងការណ៍ដែលមានលក្ខណៈជាក់លាក់។",
        isCompleted: false,
        courseContentId: 53,
        slug: "how-to-write-a-research-problem-report"
    },
    {
        title: "ឧទាហរណ៍នៃបញ្ហាស្រាវជ្រាវ",
        order_number: 3,
        key_takeaway_text: "ឧទាហរណ៍: \"តើការប្រើប្រាស់បច្ចេកវិទ្យាមានឥទ្ធិពលលើលទ្ធផលសិក្សារបស់សិស្សដែរឬទេ?\"",
        isCompleted: false,
        courseContentId: 53,
        slug: "example-of-research-problem-report"
    },
    {
        title: "គោលបំណងនៃការពិនិត្យអក្សរសិល្ប៍",
        order_number: 1,
        key_takeaway_text: "ការពិនិត្យអក្សរសិល្ប៍ជួយអ្នកយល់ពីការស្រាវជ្រាវពីមុន និងកំណត់ពីចំណុចខ្វះខាត។",
        isCompleted: false,
        courseContentId: 54,
        slug: "purpose-of-literature-review-report"
    },
    {
        title: "ជំហានក្នុងការពិនិត្យអក្សរសិល្ប៍",
        order_number: 2,
        key_takeaway_text: "ជំហានរួមមានការស្វែងរកប្រភព ការវាយតម្លៃប្រភព និងការសង្ខេបការស្រាវជ្រាវដែលពាក់ព័ន្ធ។",
        isCompleted: false,
        courseContentId: 54,
        slug: "steps-in-literature-review-report"
    },
    {
        title: "របៀបសរសេរបញ្ហាស្រាវជ្រាវ",
        order_number: 3,
        key_takeaway_text: "ការពិនិត្យអក្សរសិល្ប៍គួរតែមានលក្ខណៈវិភាគ និងប្រៀបធៀប។",
        isCompleted: false,
        courseContentId: 54,
        slug: "how-to-write-literature-review-report"
    },
    {
        title: "ការកំណត់បញ្ហាស្រាវជ្រាវ",
        order_number: 1,
        key_takeaway_text: "បញ្ហាស្រាវជ្រាវ គឺជាចំណុចកណ្តាលនៃនិក្ខេបបទរបស់អ្នក។ វាត្រូវតែច្បាស់លាស់ និងជាក់លាក់។",
        isCompleted: false,
        courseContentId: 57,
        slug: "defining-the-research-problem-thesis"
    },
    {
        title: "របៀបសរសេរបញ្ហាស្រាវជ្រាវ",
        order_number: 2,
        key_takeaway_text: "បញ្ហាស្រាវជ្រាវគួរតែត្រូវបានសរសេរជាសំណួរ ឬសេចក្តីថ្លែងការណ៍ដែលមានលក្ខណៈជាក់លាក់។",
        isCompleted: false,
        courseContentId: 57,
        slug: "how-to-write-a-research-problem-thesis"
    },
    {
        title: "ឧទាហរណ៍នៃបញ្ហាស្រាវជ្រាវ",
        order_number: 3,
        key_takeaway_text: "ឧទាហរណ៍: \"តើការប្រើប្រាស់បច្ចេកវិទ្យាមានឥទ្ធិពលលើលទ្ធផលសិក្សារបស់សិស្សដែរឬទេ?\"",
        isCompleted: false,
        courseContentId: 57,
        slug: "example-of-research-problem-thesis"
    },
    {
        title: "គោលបំណងនៃការពិនិត្យអក្សរសិល្ប៍",
        order_number: 1,
        key_takeaway_text: "ការពិនិត្យអក្សរសិល្ប៍ជួយអ្នកយល់ពីការស្រាវជ្រាវពីមុន និងកំណត់ពីចំណុចខ្វះខាត។",
        isCompleted: false,
        courseContentId: 58,
        slug: "purpose-of-literature-review-thesis"
    },
    {
        title: "ជំហានក្នុងការពិនិត្យអក្សរសិល្ប៍",
        order_number: 2,
        key_takeaway_text: "ជំហានរួមមានការស្វែងរកប្រភព ការវាយតម្លៃប្រភព និងការសង្ខេបការស្រាវជ្រាវដែលពាក់ព័ន្ធ។",
        isCompleted: false,
        courseContentId: 58,
        slug: "steps-in-literature-review-thesis"
    },
    {
        title: "របៀបសរសេរបញ្ហាស្រាវជ្រាវ",
        order_number: 3,
        key_takeaway_text: "ការពិនិត្យអក្សរសិល្ប៍គួរតែមានលក្ខណៈវិភាគ និងប្រៀបធៀប។",
        isCompleted: false,
        courseContentId: 58,
        slug: "how-to-write-literature-review-thesis"
    },
    {
        title: "ការកំណត់បញ្ហាស្រាវជ្រាវ",
        order_number: 1,
        key_takeaway_text: "បញ្ហាស្រាវជ្រាវ គឺជាចំណុចកណ្តាលនៃអត្ថបទរបស់អ្នក។ វាត្រូវតែច្បាស់លាស់ និងជាក់លាក់។",
        isCompleted: false,
        courseContentId: 61,
        slug: "defining-the-research-problem-paper"
    },
    {
        title: "របៀបសរសេរបញ្ហាស្រាវជ្រាវ",
        order_number: 2,
        key_takeaway_text: "បញ្ហាស្រាវជ្រាវគួរតែត្រូវបានសរសេរជាសំណួរ ឬសេចក្តីថ្លែងការណ៍ដែលមានលក្ខណៈជាក់លាក់។",
        isCompleted: false,
        courseContentId: 61,
        slug: "how-to-write-a-research-problem-paper"
    },
    {
        title: "ឧទាហរណ៍នៃបញ្ហាស្រាវជ្រាវ",
        order_number: 3,
        key_takeaway_text: "ឧទាហរណ៍: \"តើការប្រើប្រាស់បច្ចេកវិទ្យាមានឥទ្ធិពលលើលទ្ធផលសិក្សារបស់សិស្សដែរឬទេ?\"",
        isCompleted: false,
        courseContentId: 61,
        slug: "example-of-research-problem-paper"
    },
    {
        title: "គោលបំណងនៃការពិនិត្យអក្សរសិល្ប៍",
        order_number: 1,
        key_takeaway_text: "ការពិនិត្យអក្សរសិល្ប៍ជួយអ្នកយល់ពីការស្រាវជ្រាវពីមុន និងកំណត់ពីចំណុចខ្វះខាត។",
        isCompleted: false,
        courseContentId: 62,
        slug: "purpose-of-literature-review-paper"
    },
    {
        title: "ជំហានក្នុងការពិនិត្យអក្សរសិល្ប៍",
        order_number: 2,
        key_takeaway_text: "ជំហានរួមមានការស្វែងរកប្រភព ការវាយតម្លៃប្រភព និងការសង្ខេបការស្រាវជ្រាវដែលពាក់ព័ន្ធ។",
        isCompleted: false,
        courseContentId: 62,
        slug: "steps-in-literature-review-paper"
    },
    {
        title: "របៀបសរសេរបញ្ហាស្រាវជ្រាវ",
        order_number: 3,
        key_takeaway_text: "ការពិនិត្យអក្សរសិល្ប៍គួរតែមានលក្ខណៈវិភាគ និងប្រៀបធៀប។",
        isCompleted: false,
        courseContentId: 62,
        slug: "how-to-write-literature-review-paper"
    },
    {
        title: "ការកំណត់បញ្ហាស្រាវជ្រាវ",
        order_number: 1,
        key_takeaway_text: "បញ្ហាស្រាវជ្រាវ គឺជាចំណុចកណ្តាលនៃ Review Paper របស់អ្នក។ វាត្រូវតែច្បាស់លាស់ និងជាក់លាក់។",
        isCompleted: false,
        courseContentId: 65,
        slug: "defining-the-research-problem-review"
    },
    {
        title: "របៀបសរសេរបញ្ហាស្រាវជ្រាវ",
        order_number: 2,
        key_takeaway_text: "បញ្ហាស្រាវជ្រាវគួរតែត្រូវបានសរសេរជាសំណួរ ឬសេចក្តីថ្លែងការណ៍ដែលមានលក្ខណៈជាក់លាក់។",
        isCompleted: false,
        courseContentId: 65,
        slug: "how-to-write-a-research-problem-review"
    },
    {
        title: "ឧទាហរណ៍នៃបញ្ហាស្រាវជ្រាវ",
        order_number: 3,
        key_takeaway_text: "ឧទាហរណ៍: \"តើការប្រើប្រាស់បច្ចេកវិទ្យាមានឥទ្ធិពលលើលទ្ធផលសិក្សារបស់សិស្សដែរឬទេ?\"",
        isCompleted: false,
        courseContentId: 65,
        slug: "example-of-research-problem-review"
    },
    {
        title: "គោលបំណងនៃការពិនិត្យអក្សរសិល្ប៍",
        order_number: 1,
        key_takeaway_text: "ការពិនិត្យអក្សរសិល្ប៍ជួយអ្នកយល់ពីការស្រាវជ្រាវពីមុន និងកំណត់ពីចំណុចខ្វះខាត។",
        isCompleted: false,
        courseContentId: 66,
        slug: "purpose-of-literature-review-review"
    },
    {
        title: "ជំហានក្នុងការពិនិត្យអក្សរសិល្ប៍",
        order_number: 2,
        key_takeaway_text: "ជំហានរួមមានការស្វែងរកប្រភព ការវាយតម្លៃប្រភព និងការសង្ខេបការស្រាវជ្រាវដែលពាក់ព័ន្ធ។",
        isCompleted: false,
        courseContentId: 66,
        slug: "steps-in-literature-review-review-paper"
    },
    {
        title: "របៀបសរសេរបញ្ហាស្រាវជ្រាវ",
        order_number: 3,
        key_takeaway_text: "ការពិនិត្យអក្សរសិល្ប៍គួរតែមានលក្ខណៈវិភាគ និងប្រៀបធៀប។",
        isCompleted: false,
        courseContentId: 66,
        slug: "how-to-write-literature-review-review-paper"
    },
    {
        title: "គោលបំណងនៃការពិនិត្យអក្សរសិល្ប៍",
        order_number: 1,
        key_takeaway_text: "ការពិនិត្យអក្សរសិល្ប៍ជួយអ្នកយល់ពីការស្រាវជ្រាវពីមុន និងកំណត់ពីចំណុចខ្វះខាត។",
        isCompleted: false,
        courseContentId: 69,
        slug: "purpose-of-literature-review-paper-new"
    },
    {
        title: "ជំហានក្នុងការពិនិត្យអក្សរសិលុ៍",
        order_number: 2,
        key_takeaway_text: "ជំហានរួមមានការស្វែងរកប្រភព ការវាយតម្លៃប្រភព និងការសង្ខេបការស្រាវជ្រាវដែលពាក់ព័ន្ធ។",
        isCompleted: false,
        courseContentId: 69,
        slug: "steps-in-literature-review-paper-new"
    },
    {
        title: "របៀបសរសេរបញ្ហាស្រាវជ្រាវ",
        order_number: 3,
        key_takeaway_text: "ការពិនិត្យអក្សរសិល្ប៍គួរតែមានលក្ខណៈវិភាគ និងប្រៀបធៀប។",
        isCompleted: false,
        courseContentId: 69,
        slug: "how-to-write-literature-review-paper-new"
    },
    {
        title: "ការកំណត់បញ្ហាស្រាវជ្រាវ",
        order_number: 1,
        key_takeaway_text: "បញ្ហាស្រាវជ្រាវ គឺជាចំណុចកណ្តាលនៃនិក្ខេបបទរបស់អ្នក។ វាត្រូវតែច្បាស់លាស់ និងជាក់លាក់។",
        isCompleted: false,
        courseContentId: 70,
        slug: "defining-the-research-problem-thesis-new"
    },
    {
        title: "របៀបសរសេរបញ្ហាស្រាវជ្រាវ",
        order_number: 2,
        key_takeaway_text: "បញ្ហាស្រាវជ្រាវគួរតែត្រូវបានសរសេរជាសំណួរ ឬសេចក្តីថ្លែងការណ៍ដែលមានលក្ខណៈជាក់លាក់។",
        isCompleted: false,
        courseContentId: 70,
        slug: "how-to-write-a-research-problem-thesis-new"
    },
    {
        title: "ឧទាហរណ៍នៃបញ្ហាស្រាវជ្រាវ",
        order_number: 3,
        key_takeaway_text: "ឧទាហរណ៍: \"តើការប្រើប្រាស់បច្ចេកវិទ្យាមានឥទ្ធិពលលើលទ្ធផលសិក្សារបស់សិស្សដែរឬទេ?\"",
        isCompleted: false,
        courseContentId: 70,
        slug: "example-of-research-problem-thesis-new"
    },
];

export default lessons