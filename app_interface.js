import getUserDetails from './js/get_user_details.js';
import addSymptomsBox from './js/add_symptoms_box.js';
import askAI from './api/generate.js';

const webscraperexample = `HEART DISEASE
According to the Centers for Disease Control and Prevention (CDC), cardiovascular diseases are the leading cause of death across all ethnic groups and genders in the United States. You may be surprised to learn that one person dies every 34 seconds in the US from cardiovascular diseases. More than 800,000 people suffer heart attacks in the US every year (that’s one heart attack every 40 seconds). Heart disease is responsible for 1 in 5 of all deaths in the US, and it claims nearly 700,000 lives each year. 

CANCER
At the beginning of 2019, it was estimated that almost 17 million Americans alive had a history of invasive cancer, with many diagnosed years ago and currently disease-free. However, an estimated 1.9 million new cases of cancer are diagnosed each year in the US. This figure excludes skin cancers (basal cell and squamous cell) and most non-invasive cancers. An estimated 600,000 Americans die of cancer each year. This is equal to more than 1600 cancer deaths every day. Cancer is only second to cardiovascular diseases as the most common cause of death among Americans. 

CHRONIC RESPIRATORY DISEASES
The CDC estimates that 5% of American adults are living with a chronic disease of the lower respiratory tract, such as asthma, chronic bronchitis, COPD, or emphysema. These conditions are responsible for over 870,000 ER visits each year and approximately 152,000 deaths annually. Asthma and other diseases of the lower respiratory tract are the sixth leading cause of death in the US.

OBESITY
America is in the midst of an obesity epidemic. The CDC reports that over 42% of Americans are obese and approximately 9% have severe obesity. Being overweight or obese is more prevalent in men, but severe obesity is more common among women. Lifestyle changes like a healthy diet and regular exercise play a critical role in treating obesity, which is linked to many health complications. Some may also struggle with inflammatory bowel disease (IBD), which is characterized by chronic inflammation of the gastrointestinal (GI) tract. 

ALZHEIMER’S DISEASE
As of 2022, approximately 6.5 million Americans are living with Alzheimer's disease. Around 1 in 9 Americans over the age of 65 have Alzheimer’s. Nearly 3 out of 4 patients with this condition are aged 75 years or older. The disease is more prevalent among women than men, and almost two-thirds of Alzheimer’s patients are women. Alzheimer’s is also more common in Black and Hispanic people compared to Caucasians. Experts predict that by the year 2050, the number of Americans with Alzheimer’s disease may be over 12.5 million. However, new treatments and medical breakthroughs may help to slow or cure this disease.

DIABETES
Diabetes is a chronic disease that can cause damage to tissues and organs like the kidneys, eyes, heart, and blood vessels. A sick person with diabetes often does not experience any symptoms until the disease is at an advanced stage. There are over 37 million Americans with diabetes (more than 11% of the total US population). About 1 in 4 people with diabetes are undiagnosed. Additionally, 96 million adults in the US have prediabetes. Nearly half of all adults aged 65 years or older have prediabetes.

SUBSTANCE ABUSE
Substance abuse can cause both physiological and emotional complications. It affects people of all ages, genders, ethnic groups, and socioeconomic status. The National Institute on Drug Abuse (NIDA) reports that 13% of Americans aged 12 years and over report illicit drug use within the past month. Over 25% of adults in the US report heavy alcohol use (five or more drinks per day for men and four or more drinks per day for women). Also, approximately 1.9% of Americans aged 12 years and older report nonmedical use of a therapeutic drug in the past month. According to the latest reports, almost 92,000 drug overdose deaths occur each year in the US, with 20% of these deaths attributed to opioid drugs.

INFECTIOUS DISEASES
Bacterial infections are treatable with antibiotics. Many illnesses caused by viruses are self-limited, such as the common cold. Antiviral medications are available to treat other viral illnesses. Some of the main types of bacterial and viral infectious diseases prevalent in the United States are listed below.

Influenza: In recent years, anywhere from 38 to 45 million Americans have had a symptomatic influenza illness every year.

Chlamydia: This is the most common sexually transmitted infection in the US, with over 1.5 million cases reported in 2020.

Staphylococcus: Approximately 119,000 bloodstream Staphylococcus aureus (staph) infections are reported in the US each year. These infections are responsible for nearly 20,000 deaths annually.

Escherichia coli: Bacteria called E. coli can cause diarrhea, urinary tract infections, pneumonia, and other illnesses. This large group of bacteria is responsible for 265,000 illnesses and around 100 deaths in the US every year. 

HSV: Herpes simplex virus type 1 and type 2 causes cold sores (fever blisters) and genital herpes. Experts estimate that 50-80% of American adults have had oral herpes, and 90% of people have been exposed to the virus by age 50. Approximately 575,000 Americans are diagnosed with a new infection of genital herpes in the US each year. 

CHRONIC KIDNEY DISEASE
Approximately 15% of the adult population in the US (37 million people or 1 in 7 adults) have chronic kidney disease (CKD). Interestingly, up to 90% of adults with CKD do not know they have the condition, including 40% of adults with severe CKD.

MENTAL ILLNESSES
More than 50% of Americans will be diagnosed with a mental disorder at some point in their life. Experts estimate that 1 in 5 Americans experiences a mental illness in any given year. Also, 1 in 25 Americans is living with a serious mental illness like bipolar disorder, schizophrenia, or major depression.`
const responseDiv = document.getElementById('response-div');
async function submitForm() {
  let user = getUserDetails(document.querySelectorAll(".symptoms").length)
  responseDiv.innerHTML = "Loading..."
  try {
    let response = await askAI(user,webscraperexample)
    console.log(response)
    responseDiv.innerHTML = response.data.choices[0].message.content
  } catch(error) {
    console.error(error.response);
    alert(error.response.data.error.message);
  }
};

window.submitForm = submitForm
window.addSymptomsBox = addSymptomsBox