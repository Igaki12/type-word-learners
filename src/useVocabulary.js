import { useState } from 'react'

export const useVocabulary = () => {
  const [vocabulary, setVocabulary] = useState([
    {
      groupTag: 'GWL1',
      groupInfo: '9/1~9/14(仮)',
      groupContents: [
        {
          word: 'diagnosis',
          sentence: 'Early diagnosis and treatment are essential.',
        },
        {
          word: 'tumour',
          sentence: 'These tumours are commonly found in the temporal lobe.',
        },
        {
          word: 'renal',
          sentence: 'Renal infarction may be the sign of atrial fibrillation.',
        },
        {
          word: 'syndrome',
          sentence: 'Patients with WPW syndrome have Kent bundles.',
        },
        {
          word: 'liver',
          sentence: 'Cholesterol may accumulate in the liver.',
        },
        {
          word: 'transplant',
          sentence: 'A kidney was transplanted from one twin to another.',
        },
        {
          word: 'lesion',
          sentence: 'The event alerted the patients to their lesions.',
        },
        {
          word: 'acute',
          sentence:
            'Acute stress disorder was first added to teh DSM-IV in 1994.',
        },
        {
          word: 'chronic',
          sentence: 'the patients required opioids for chronic pain.',
        },
        {
          word: 'evaluate',
          sentence:
            'The study will assist in evaluation the impact liver tumors.',
        },
        {
          word: 'primary',
          sentence: 'The tests demonstrate the extent of primary liver tumors.',
        },
        {
          word: 'disorder',
          sentence:
            'Post traumatic stress disorder is a disabling consequence after a traumatic event.',
        },
        {
          word: 'artery',
          sentence: 'the internal iliac artery is about 4 cm long.',
        },
        {
          word: 'decrease',
          sentence: 'The population of the area has decreased radically.',
        },
        {
          word: 'abnormal',
          sentence:
            'The illness is recognizable from the patients abnormal behavior.',
        },
        {
          word: 'surgical',
          sentence:
            'Generally, advanced stage lung carcinoma is a consideration when a patient presents with hypercortisolism.',
        },
        {
          word: 'gene',
          sentence:
            'SOme mutations in the beta globin gene make the HbS molecules.',
        },
        {
          word: 'carcinoma',
          sentence:
            'Adrenocortical carcinoma is a consideration when a patient presents with hypercortisolism.',
        },
        {
          word: 'urine',
          sentence: 'Urine is normally sterile.',
        },
        {
          word: 'hypertension',
          sentence:
            'Increased afterload leads to the development of hypertension.',
        },
        {
          word: 'hepatitis',
          sentence: 'Hepatitis most commonly results from viruses.',
        },
        {
          word: 'anterior',
          sentence:
            'The submental artery supplies blood to the anterior belly of the digastric.',
        },
        {
          word: 'protein',
          sentence:
            'The virus has the coding potential for around 80 proteins.',
        },
        {
          word: 'posterior',
          sentence:
            'The posterior belly of the digastric receives innervation from the facial nerve.',
        },
        {
          word: 'infant',
          sentence: 'She picked up the fretful infant.',
        },
        {
          word: 'lateral',
          sentence:
            'In dim light, rod bipolar cells receive lateral inhibition from amacrine cells.',
        },
        {
          word: 'paediatric',
          sentence:
            'Head trauma is a regular presentation in the paediatric emergency department.',
        },
        {
          word: 'serum',
          sentence:
            'The researchers examined blood serum obtained from themselves.',
        },
        {
          word: 'presence',
          sentence:
            'Presence of a train on a section of track was indicated electrically.',
        },
        {
          word: 'recur',
          sentence:
            'When the symptoms recurred, the doctor diagnosed something different.',
        },
        {
          word: 'inflame',
          sentence:
            'The finger joints were inflamed with rheumatoid arthritis.',
        },
        {
          word: 'biopsy',
          sentence: 'Cirrhosis was confirmed by biopsy.',
        },
        {
          word: 'pulmonary',
          sentence: 'Chest trauma can lead to a pulmonary contusion.',
        },
        {
          word: 'pathology',
          sentence: 'The dominant pathology was multiple sclerosis.',
        },
        {
          word: 'vagina',
          sentence:
            'The vagina plays a vital role in the female reproductive system.',
        },
        {
          word: 'inhibit',
          sentence: 'Paroxetine inhibits the reuptake of serotonin.',
        },
        {
          word: 'mutate',
          sentence: 'The virus is able to mutate into new forms.',
        },
        {
          word: 'anaesthesia',
          sentence: 'Body temperature falls during anaesthesia.',
        },
        {
          word: 'hepatic',
          sentence:
            'Acute hepatic inflammation can be caused by many infectious causes.',
        },
        {
          word: 'malign',
          sentence: 'The most frequent malign cardiac tumor is a sarcoma.',
        },
        {
          word: 'abdomen',
          sentence: 'I woke with pains in my abdomen.',
        },
        {
          word: 'defect',
          sentence:
            'Atrial septal defects are noted in patients with trisomy 21.',
        },
        {
          word: 'incidence',
          sentence:
            'HPV has been proposed to have a role in prostate cancer incidence.',
        },
        {
          word: 'obstruct',
          sentence:
            'If left untreated, xanthine precipitation obstructs the renal tubules.',
        },
        {
          word: 'prostate',
          sentence:
            'The prostate shares a close anatomical relationship with the bladder.',
        },
        {
          word: 'graft',
          sentence: 'She had a skin graft.',
        },
        {
          word: 'bladder',
          sentence: 'The patients were asked to empty their bladders.',
        },
        {
          word: 'elevate',
          sentence:
            'A blood pressure of 180/110 mmHg is considered to be abnormally elevated.',
        },
        {
          word: 'fluid',
          sentence:
            'The instruments are designed to measure the flow of fluid.',
        },
        {
          word: 'hormone',
          sentence: 'The pituitary gland secretes various hormones.',
        },
        {
          word: 'node',
          sentence: 'Infection in these lymph nodes may lead to backache.',
        },
        {
          word: 'cardiac',
          sentence:
            'Ischaemic coronary disease is the leading cause of cardiac arrest.',
        },
        {
          word: 'vascular',
          sentence:
            'Peripheral vascular disease is well established risk factors for stroke.',
        },
        {
          word: 'deficiency',
          sentence: 'She has a vitamin deficiency in her diet.',
        },
        {
          word: 'receptor',
          sentence: 'The viruses bind to cell membrane receptors.',
        },
        {
          word: 'metabolism',
          sentence:
            'Insufficient sleep is linked to abnormal glucose metabolism.',
        },
        {
          word: 'mechanism',
          sentence:
            'DNA methylation is thought to be the principal mechanism of genomic imprinting.',
        },
        {
          word: 'radiate',
          sentence: 'The hot stars radiate energy.',
        },
        {
          word: 'fracture',
          sentence: 'He fractured his skull when he was a kid.',
        },
        {
          word: 'bile',
          sentence:
            'bile acid malabsorption is one several causes of chronic diarrhea.',
        },
        // {
        //   word: '',
        //   sentence: '',
        // },
        // {
        //   word: '',
        //   sentence: '',
        // },
        // {
        //   word: '',
        //   sentence: '',
        // },
        // {
        //   word: '',
        //   sentence: '',
        // },
        // {
        //   word: '',
        //   sentence: '',
        // },
      ],
    },
  ])
  const showVocabulary = () => {
    console.log(vocabulary.length)
    let groupId = -1
    return vocabulary.reduce((preVocabulary, currentGroup) => {
      groupId += 1
      let contentId = 0
      return [
        ...preVocabulary,
        {
          groupTag: currentGroup.groupTag,
          groupInfo: currentGroup.groupInfo,
          groupContents: currentGroup.groupContents.reduce(
            (prevContent, currentContent) => {
              contentId += 1
              if (
                currentContent.word &&
                currentContent.sentence &&
                currentContent.sentence
                  .replace('.', '')
                  .replace('?', '')
                  .split(/\s+/g).length > 3
              ) {
                return [
                  ...prevContent,
                  {
                    word: currentContent.word,
                    sentence: currentContent.sentence,
                    id:
                      [
                        'a',
                        'b',
                        'c',
                        'd',
                        'e',
                        'f',
                        'g',
                        'h',
                        'i',
                        'j',
                        'k',
                        'l',
                        'm',
                        'n',
                        'o',
                        'p',
                        'q',
                        'r',
                        's',
                        't',
                        'u',
                        'v',
                        'w',
                        'x',
                        'y',
                        'z',
                      ][groupId] + ('000' + contentId).slice(-3),
                  },
                ]
              }
              return [...prevContent]
            },
            [],
          ),
        },
      ]
    }, [])
  }
  return { showVocabulary }
}
