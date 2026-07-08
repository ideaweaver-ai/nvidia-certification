const AWS_TITLE = "AWS Certified AI Practitioner";

const AWS_QUESTIONS = [
{
  q: "Which of the following methods would be most appropriate for predicting the future inventory needs of a store to meet customer demand based on historical sales data and other influencing factors?",
  options: { A: "Cluster Analysis", B: "Linear Regression Analysis", C: "Time Series Analysis", D: "Logistic Regression Analysis" },
  correct: "C",
  explanation: "Time Series Analysis is specifically designed for forecasting future values based on historical data collected over time. It identifies trends, seasonality, and cyclical patterns, making it the best choice for predicting future inventory needs.\n\nA: Cluster Analysis groups similar data points (e.g. customer segmentation) and does not forecast future values. B: Linear Regression can predict a value but does not explicitly account for time-dependent patterns like seasonality. D: Logistic Regression predicts categorical outcomes (Yes/No), not continuous future demand.",
  tip: "Time Series → Forecast the future. Linear Regression → Predict a continuous value. Logistic Regression → Predict a category. Cluster Analysis → Group similar items. Keywords like historical data, forecast, seasonality point to Time Series Analysis."
},
{
  q: "In the context of AI and machine learning, what is the process called when an AI model makes predictions based on the data it has been trained on?",
  options: { A: "Training", B: "Evaluation", C: "Inference", D: "Validation" },
  correct: "C",
  explanation: "Inference is the process of using a trained model to make predictions or generate outputs from new, unseen data — it happens after the model has been trained and deployed.\n\nA: Training is teaching the model by adjusting parameters using a dataset — it happens before inference. B: Evaluation measures how well a trained model performs using metrics like accuracy or F1-score. D: Validation tunes hyperparameters during development, not production prediction.",
  tip: "Lifecycle: Training → Validation → Evaluation → Inference. Inference = 'using' the AI model to predict on new data."
},
{
  q: "You are working as an AI engineer and your task is to detect suspicious IP addresses entering your network. Which type of machine learning technique is most appropriate for this task?",
  options: { A: "Classification", B: "Regression", C: "Anomaly Detection", D: "Clustering" },
  correct: "C",
  explanation: "Anomaly Detection identifies unusual patterns that differ significantly from normal behavior — ideal for detecting suspicious IPs, fraud, and intrusions, especially when malicious behavior is rare or labeled attack data is limited.\n\nA: Classification requires labeled data and predicts predefined categories. B: Regression predicts continuous numeric values, not suspicious activity. D: Clustering groups similar data but doesn't specifically flag abnormal behavior.",
  tip: "Keywords like suspicious, unusual, abnormal, outlier, fraud, intrusion → Anomaly Detection."
},
{
  q: "As an AI engineer, you are tasked with developing a system that can complete sentences based on partial input. What type of AI model would you choose for this purpose?",
  options: { A: "Convolutional Neural Network (CNN)", B: "Recurrent Neural Network (RNN)", C: "Generative Adversarial Network (GAN)", D: "Transformer Model" },
  correct: "D",
  explanation: "Transformer Models are the foundation of modern NLP, using self-attention to understand relationships between all words in a sentence simultaneously, enabling coherent text generation and sentence completion (GPT, Claude, Llama are all Transformer-based).\n\nA: CNNs are designed for image/video tasks. B: RNNs process sequences one token at a time and are largely replaced by Transformers for modern NLP. C: GANs are used for generating realistic synthetic data like images, not text completion.",
  tip: "Completing sentences, chatbots, LLMs, text generation, translation, summarization → Transformer Model."
},
{
  q: "You have thousands of PDF documents that you need to convert to text files in order to feed them into your machine learning model. Which AWS tool would you use for this purpose?",
  options: { A: "AWS Lambda", B: "Amazon Textract", C: "Amazon Comprehend", D: "AWS Glue" },
  correct: "B",
  explanation: "Amazon Textract automatically extracts text, handwriting, tables, and forms from scanned documents, PDFs, and images using OCR and machine learning — exactly matching the requirement.\n\nA: Lambda is serverless compute; it can orchestrate but does not perform OCR itself. C: Comprehend analyzes existing text (sentiment, entities) but requires text as input, not PDFs. D: Glue is an ETL/data integration service, not an OCR tool.",
  tip: "PDF, scanned document, image, OCR, extract text, forms/invoices → Amazon Textract."
},
{
  q: "You have a large collection of images featuring celebrities, and you need to identify the celebrities in those images using an AWS service. Which AWS service would you use for this purpose?",
  options: { A: "Amazon Rekognition", B: "Amazon SageMaker", C: "Amazon Polly", D: "AWS DeepLens" },
  correct: "A",
  explanation: "Amazon Rekognition uses computer vision to analyze images and video, including a built-in RecognizeCelebrities feature, without requiring you to build or train your own model.\n\nB: SageMaker could build a custom model but that's unnecessary when Rekognition already provides this. C: Polly is text-to-speech and has no image capability. D: DeepLens is an edge camera for experimenting with computer vision, not a managed celebrity-recognition service.",
  tip: "Images, faces, celebrities, objects, video analysis → Amazon Rekognition."
},
{
  q: "In the context of generative AI models, what does the term \"Top-P\" refer to, and how does it impact the text generation process?",
  options: {
    A: "Top-P refers to selecting the most probable next word in the sequence, ensuring the model always picks the highest probability word, leading to deterministic outputs.",
    B: "Top-P is a method for filtering the model's vocabulary to only consider the top probability words that collectively sum up to a probability of P, which allows for more diverse and creative text generation.",
    C: "Top-P is a technique used to train the model by prioritizing the loss function, ensuring that the model converges faster during training.",
    D: "Top-P is an approach to limit the maximum length of the generated sequence, ensuring the output is concise and controlled."
  },
  correct: "B",
  explanation: "Top-P (Nucleus Sampling) selects the smallest set of tokens whose cumulative probability is at least P, then samples the next token from that subset — balancing coherence with creativity.\n\nA describes greedy decoding, not Top-P. C confuses it with a training-time technique — Top-P is an inference-time decoding parameter. D describes Max Tokens, a separate parameter that limits response length.",
  tip: "Temperature = how random? Top-P = which pool of likely words? Top-K = top K words only. Max Tokens = how long?"
},
{
  q: "In the context of generative AI models, what does the \"temperature\" parameter control, and how does it impact the text generation process?",
  options: {
    A: "Temperature controls the length of the generated text by setting a maximum limit, ensuring the output does not exceed a certain number of tokens.",
    B: "Temperature controls the randomness of predictions, where a higher temperature value results in more random and diverse text, and a lower temperature value leads to more deterministic and focused output.",
    C: "Temperature adjusts the learning rate during model training, impacting how quickly the model converges to an optimal solution.",
    D: "Temperature defines the probability threshold for word selection, ensuring that only words above a certain probability are chosen during text generation."
  },
  correct: "B",
  explanation: "Temperature is an inference-time setting controlling randomness: low temperature (0.0–0.3) produces deterministic, focused output good for factual/technical tasks; high temperature (0.8–1.5) produces more creative, diverse output.\n\nA describes Max Tokens, not Temperature. C confuses it with the learning rate, a training hyperparameter. D describes Top-P (Nucleus Sampling), not Temperature.",
  tip: "Temperature = how creative should the response be? Not a training parameter — it only affects inference-time token sampling."
},
{
  q: "In the context of training machine learning models, what does the term \"epoch\" refer to, and how does it impact the training process?",
  options: {
    A: "An epoch is a single pass through the entire training dataset, after which the model's parameters are updated to minimize the loss function. More epochs can lead to better learning but may also risk overfitting.",
    B: "An epoch refers to a batch of data used during the training process, with the model's parameters being updated after each epoch is processed.",
    C: "An epoch is a measure of the model's accuracy, where a higher number of epochs indicates a more accurate model.",
    D: "An epoch is a parameter that controls the learning rate, determining how quickly or slowly the model converges to an optimal solution."
  },
  correct: "A",
  explanation: "An epoch represents one complete pass through the entire training dataset. Training typically requires multiple epochs, but too few causes underfitting while too many risks overfitting.\n\nB describes a batch, not an epoch (a batch is a subset processed per iteration). C is wrong — epochs measure training progress, not accuracy; too many epochs can actually hurt performance. D describes the learning rate, a separate hyperparameter.",
  tip: "1,000 images, batch size 100 → 1 batch = 100 images, 10 iterations = all 1,000 images = 1 epoch."
},
{
  q: "As an AI engineer using AWS Bedrock in your organization, you want to ensure that your generative AI application adheres to ethical standards and provides a safe user experience. Which AWS Bedrock feature would you use to implement content moderation and privacy protections, and what are the key capabilities it offers?",
  options: {
    A: "Amazon Comprehend, which provides sentiment analysis and entity recognition.",
    B: "Bedrock Guardrails, which enables you to customize and apply safety, privacy, and truthfulness checks for your generative AI applications.",
    C: "AWS Shield, which protects against DDoS attacks.",
    D: "Amazon Rekognition, which offers content moderation for images and videos."
  },
  correct: "B",
  explanation: "Amazon Bedrock Guardrails lets you define policies for content filtering, denied topics, sensitive information (PII) filtering, word filters, and contextual grounding checks to reduce hallucinations — ensuring safe, responsible generative AI applications.\n\nA: Comprehend analyzes text but doesn't enforce guardrail policies. C: Shield protects against DDoS attacks, unrelated to content moderation. D: Rekognition moderates images/video, not text prompts/responses from Bedrock.",
  tip: "Guardrails = protect AI conversations. Comprehend = understand text. Rekognition = understand images/video. Shield = protect network infrastructure."
},
{
  q: "As an AI engineer using large language models (LLMs) in your organization, you need the LLM to leverage company documents to answer queries related to your organization's specific context. Which Bedrock feature will help you achieve this?",
  options: { A: "Bedrock Knowledge Bases", B: "Bedrock Model Evaluation", C: "Amazon Comprehend", D: "Amazon Rekognition" },
  correct: "A",
  explanation: "Amazon Bedrock Knowledge Bases enables foundation models to retrieve relevant information from your organization's proprietary data (S3, Confluence, Salesforce, SharePoint) before generating a response — simplifying Retrieval-Augmented Generation (RAG).\n\nB: Model Evaluation compares foundation models, not organizational knowledge retrieval. C: Comprehend analyzes existing text but has no RAG capability. D: Rekognition analyzes images/video, unrelated to enterprise document retrieval.",
  tip: "Knowledge Bases = give the LLM access to your company's documents (RAG). Guardrails = safety. Model Evaluation = pick the best model. Agents = automate workflows."
},
{
  q: "In the context of generative AI, what are tokens, and how are they used in the process of text generation?",
  options: {
    A: "Tokens are individual words processed by the model, used to measure the accuracy of the model's predictions.",
    B: "Tokens are individual units of text, such as characters, words, or sub-word fragments, used by the model to process and generate text.",
    C: "Tokens are metadata tags applied to text data, helping to organize and categorize information for the model.",
    D: "Tokens are sections of a document, divided to improve the model's processing speed and reduce computation costs."
  },
  correct: "B",
  explanation: "Tokens are the basic units of text an LLM processes — they may be a full word, part of a word, a character, or punctuation. The model converts input into tokens and predicts one token at a time until it generates a complete response.\n\nA is partially true but too narrow (tokens aren't always full words) and tokens aren't used to measure accuracy. C confuses tokens with metadata/labels. D confuses tokens with document chunks used in RAG, which are a much larger unit.",
  tip: "Tokens = building blocks of text. Embeddings = mathematical representation of text. Context Window = how many tokens the model can remember at once."
},
{
  q: "A company is building a generative AI application by using a foundation model (FM). The company decides to customize its own FM by using proprietary datasets instead of using a pre-trained FM.\nWhat are the tradeoffs of customizing the FM? (Select TWO.)",
  options: { A: "Increased risk of hallucination", B: "Reduced accuracy", C: "Higher latency", D: "Higher cost", E: "Higher implementation complexity" },
  correct: ["D", "E"],
  explanation: "Customizing a foundation model (fine-tuning/continued pre-training) requires additional GPU compute, data prep, evaluation, and infrastructure — driving Higher Cost. It also requires preparing datasets, hyperparameter tuning, monitoring for drift, and AI/ML expertise — driving Higher Implementation Complexity.\n\nA: Customizing with high-quality data can actually reduce hallucinations in-domain. B: Customization's goal is usually improved accuracy, not reduced. C: Latency depends on model size/hardware/serving, not customization itself.",
  tip: "If asked about tradeoffs of customizing a foundation model, think: Higher Cost + Higher Implementation Complexity."
},
{
  q: "A company wants to increase the consistency and quality of large language model (LLM) responses by providing the model with access to external sources of knowledge.\nWhich technique will meet the requirement with the LEAST development effort?",
  options: { A: "Fine-tuning", B: "Retrieval Augmented Generation (RAG)", C: "In-context learning", D: "Prompt engineering" },
  correct: "B",
  explanation: "RAG retrieves relevant information from external knowledge sources at inference time, without modifying the foundation model itself — offering the least development effort while improving consistency, relevance, and factual accuracy.\n\nA: Fine-tuning requires dataset prep, GPU training, and ongoing maintenance — far more effort. C: In-context learning guides behavior via prompt examples but doesn't connect to external knowledge sources. D: Prompt engineering alone cannot provide access to external or constantly changing data.",
  tip: "Company documents, knowledge base, external data, least development effort, reduce hallucinations → RAG."
},
{
  q: "A travel company wants to use a pre-trained generative AI model to generate background images for marketing materials. The company does not have ML expertise. Additionally, the company does not want to customize and host the ML model.\nWhich AWS service will meet these requirements?",
  options: { A: "Amazon Bedrock", B: "Amazon SageMaker JumpStart", C: "Amazon Rekognition", D: "Amazon Personalize" },
  correct: "A",
  explanation: "Amazon Bedrock provides access to pre-trained foundation models (including image generation models) via a single API — AWS manages hosting, scaling, and infrastructure, requiring no ML expertise or custom hosting.\n\nB: SageMaker JumpStart is intended for teams that want more control over deployment and customization — the opposite of what's needed here. C: Rekognition analyzes existing images; it doesn't generate new ones. D: Personalize builds recommendation systems, not image generation.",
  tip: "Pre-trained foundation model + no ML expertise + no infrastructure management + no hosting → Amazon Bedrock."
},
{
  q: "A company is deploying a solution on AWS to enhance its knowledge base with semantic search capabilities. The company plans to integrate the solution with Amazon Bedrock.\nWhich AWS service can the company use to secure access to Amazon Bedrock?",
  options: { A: "Amazon Macie", B: "Amazon Rekognition", C: "AWS Identity and Access Management (IAM)", D: "AWS Config" },
  correct: "C",
  explanation: "AWS IAM securely controls access to AWS resources including Amazon Bedrock — creating users/roles, defining fine-grained policies, and enforcing least privilege over who can invoke Bedrock models.\n\nA: Macie discovers/protects sensitive data in S3, not access control. B: Rekognition analyzes images/video, unrelated to access control. D: AWS Config monitors resource configuration compliance, not authentication/authorization.",
  tip: "Secure access → IAM. Protect sensitive data → Macie. Monitor configurations → AWS Config. Analyze images/video → Rekognition."
},
{
  q: "What is a valid data format for instruction-based fine-tuning?",
  options: { A: "Images that are labeled with categories", B: "Playlists that are curated with recommended music", C: "Prompt-response text pairs", D: "Audio files with transcriptions" },
  correct: "C",
  explanation: "Instruction-based fine-tuning trains an LLM using examples of an instruction (prompt) and the desired response — typically stored as JSON/JSONL prompt-response pairs, teaching the model how to follow instructions.\n\nA: Labeled images are used for computer vision (image classification), not LLM instruction tuning. B: Curated playlists are for recommendation systems like Amazon Personalize. D: Audio+transcription pairs train speech recognition models like Amazon Transcribe.",
  tip: "LLM instruction tuning → Prompt → Response. Computer Vision → Image → Label. Speech Recognition → Audio → Text."
},
{
  q: "In the context of image recognition, what does a model typically analyze in an image to recognize objects, features, or patterns?",
  options: {
    A: "The model analyzes metadata tags associated with the image.",
    B: "The model examines the pixels of the image, focusing on patterns of color, texture, and edges.",
    C: "The model relies on the file name and size to identify objects in the image.",
    D: "The model uses the resolution of the image as the primary factor for recognition."
  },
  correct: "B",
  explanation: "Image recognition models (CNNs, Vision Transformers) analyze the pixel values of an image, learning hierarchical features — early layers detect edges, middle layers detect shapes/textures, deeper layers recognize complete objects.\n\nA: Metadata (EXIF, timestamps) provides no visual information used for recognition. C: File name/size carry no meaningful visual content. D: Resolution affects image quality/detail but isn't the primary recognition factor — the model still analyzes pixel patterns regardless.",
  tip: "The model doesn't 'see' a picture — it sees millions of pixel values and learns patterns from them (edges, colors, textures, shapes)."
},
{
  q: "When using Amazon SageMaker Ground Truth to label data, which of the following services can you integrate to utilize a large, diverse group of human annotators for data annotation tasks?",
  options: { A: "Amazon Mechanical Turk", B: "Amazon Augmented AI", C: "Amazon SageMaker Data Wrangler", D: "Amazon SageMaker Studio" },
  correct: "A",
  explanation: "Amazon Mechanical Turk is a crowdsourcing marketplace providing access to a large, diverse workforce of human annotators, which SageMaker Ground Truth can integrate with to label datasets at scale.\n\nB: Amazon Augmented AI (A2I) routes low-confidence AI predictions to human reviewers — human-in-the-loop review, not crowdsourced large-scale annotation. C: Data Wrangler prepares/cleans data, no human annotators. D: SageMaker Studio is the ML development IDE, not a labeling workforce.",
  tip: "Mechanical Turk → people label data. Ground Truth → manages labeling. A2I → humans review AI predictions. 'Large, diverse crowdsourced workforce' → Mechanical Turk."
},
{
  q: "You are using Amazon Bedrock to build generative AI applications, and you need to automate complex, multi-step tasks across various company systems and data sources. Which Amazon Bedrock feature would you use to accomplish this, and what key capabilities does it provide?",
  options: { A: "Amazon Bedrock Knowledge Bases", B: "Amazon Bedrock Model Evaluation", C: "Amazon Bedrock Agents", D: "Amazon SageMaker Pipelines" },
  correct: "C",
  explanation: "Amazon Bedrock Agents plan, orchestrate, and execute multi-step tasks using foundation models — breaking complex requests into steps, integrating with APIs/Lambda via Action Groups, retrieving knowledge, and reasoning about the sequence of actions needed.\n\nA: Knowledge Bases retrieve info via RAG but don't orchestrate workflows or call APIs. B: Model Evaluation compares models, not workflow automation. D: SageMaker Pipelines automates the ML training lifecycle, not conversational multi-step business tasks.",
  tip: "Agents → Take Actions. Knowledge Bases → Retrieve Knowledge. Guardrails → Protect AI. Model Evaluation → Choose the Best Model. Multi-step tasks, workflow automation, calling APIs → Bedrock Agents."
},
{
  q: "In the context of machine learning, which of the following statements correctly describe the concepts of overfitting and underfitting? (Choose TWO correct answers)",
  options: {
    A: "Overfitting occurs when a model is too complex, capturing noise and details specific to the training data, which leads to poor generalization to new data.",
    B: "Underfitting happens when a model is too simple, failing to capture the underlying patterns in the data, resulting in poor performance on both training and test datasets.",
    C: "Overfitting is when the model performs well on both training and unseen data, indicating that it has learned the true underlying pattern.",
    D: "Underfitting occurs when the model performs perfectly on the training data but poorly on new data, indicating it has memorized the training set.",
    E: "Overfitting can be mitigated by simplifying the model, using techniques like regularization or cross-validation."
  },
  correct: ["A", "B"],
  explanation: "Overfitting: the model learns noise/random details in training data, giving excellent training accuracy but poor generalization to unseen data. Underfitting: the model is too simple to learn the underlying patterns, giving poor accuracy on both training and test data.\n\nC actually describes a well-generalized model, not overfitting. D describes overfitting, not underfitting (it has the definitions swapped). E is technically correct but describes mitigation, not the definition the question asks for.",
  tip: "Underfitting = didn't study enough (poor everywhere). Good Fit = understood concepts (good everywhere). Overfitting = memorized answers (great on familiar, poor on new)."
},
{
  q: "In the context of machine learning, what is bias in a model?",
  options: {
    A: "Bias is a systematic error in a machine learning model that causes it to make unfair or inaccurate predictions for certain groups of data.",
    B: "Bias happens when a model perfectly fits the training data but performs poorly on new data due to its complexity.",
    C: "Bias is when a model's predictions are always accurate, regardless of the input data.",
    D: "Bias occurs when a model makes predictions based solely on the most frequent patterns in the training data."
  },
  correct: "A",
  explanation: "Bias is a systematic error causing a model to consistently make incorrect or unfair predictions — arising from unrepresentative training data, incorrect algorithm assumptions, or poor feature selection.\n\nB describes overfitting, not bias. C is incorrect — no model is perfectly accurate in all situations. D is too narrow; bias is a broader concept than just relying on frequent patterns.",
  tip: "Bias → consistently wrong due to flawed assumptions/biased data. Overfitting → memorizes training data. Underfitting → doesn't learn enough. Variance → predictions change too much with different training data."
},
{
  q: "Which of the following AWS instance series is specifically designed to be more energy-efficient and environmentally friendly, particularly for machine learning workloads?",
  options: { A: "AWS C (Compute Optimized)", B: "AWS R (Memory Optimized)", C: "AWS Trn (Trainium)", D: "AWS I (Storage Optimized)" },
  correct: "C",
  explanation: "AWS Trainium (Trn instances) is a purpose-built ML accelerator for training deep learning models, offering high performance, improved energy efficiency, and lower training cost compared to traditional GPU instances.\n\nA: Compute Optimized instances suit CPU-intensive workloads, not specifically energy-efficient ML training. B: Memory Optimized instances provide large RAM for in-memory workloads, not built for ML acceleration. D: Storage Optimized instances target high storage throughput, unrelated to AI training.",
  tip: "Trn = Trainium = Training. Inf = Inferentia = Inference. Energy efficiency, sustainability, cost-effective AI training → AWS Trainium (Trn)."
},
{
  q: "In the context of generative AI models, what does \"few-shot prompting\" refer to, and how is it typically used?",
  options: {
    A: "Few-shot prompting refers to training a model with a large dataset to improve its accuracy.",
    B: "Few-shot prompting involves providing the model with a few examples within the prompt to guide it in generating the desired output.",
    C: "Few-shot prompting is the process of deploying a model with minimal computational resources.",
    D: "Few-shot prompting means the model requires extensive retraining with each new task."
  },
  correct: "B",
  explanation: "Few-shot prompting provides several example input-output pairs within the prompt to guide the model's output format, style, and pattern — this is in-context learning, and the model is not retrained.\n\nA describes model training/fine-tuning, not prompting. C is unrelated — few-shot prompting has nothing to do with deployment resources. D is wrong — one of the main advantages of few-shot prompting is that no retraining is required.",
  tip: "Zero-shot → 'Do it.' (no examples). One-shot → one example. Few-shot → several examples demonstrating the pattern, no retraining required."
},
{
  q: "You are developing an AI-powered assistant that needs to answer a wide variety of customer queries. The assistant must handle questions about a new product category that was not included in its training data. Instead of retraining the model or providing it with specific examples of the new product category, you rely on the model's ability to understand and generate relevant answers based on the instructions you provide.\nWhich approach best describes this technique?",
  options: {
    A: "Provide the model with a general instruction or context within the prompt, enabling it to generate relevant responses for the new product category.",
    B: "Fine-tune the model with a small dataset specific to the new product category before deploying it.",
    C: "Feed the model a few examples of similar product categories to guide its responses.",
    D: "Use a retrieval-based system where the model searches for the closest match to the new product category in a pre-existing dataset."
  },
  correct: "A",
  explanation: "This describes Zero-shot Prompting — the model receives only an instruction/task description, with no examples and no retraining, relying entirely on knowledge acquired during pre-training.\n\nB describes fine-tuning, which the question explicitly rules out. C describes few-shot prompting, which the question explicitly rules out ('do not provide specific examples'). D describes RAG, but the scenario doesn't mention external documents or retrieval systems.",
  tip: "No retraining + no examples + only instructions + rely on existing knowledge → Zero-shot Prompting."
},
{
  q: "Which approach would allow you to refine the model's responses to better align with your organization's tone and style, without needing to retrain the entire model?",
  options: {
    A: "Fine-tune the entire model using a large new dataset that reflects the desired tone and style.",
    B: "Adjust the prompt by providing specific examples of the desired tone and style directly within the input to the model.",
    C: "Implement prompt tuning, where you fine-tune the model's behavior by optimizing a small set of prompt parameters to achieve the desired tone and style.",
    D: "Retrain the model from scratch using the organization's specific guidelines and requirements."
  },
  correct: "C",
  explanation: "Prompt tuning is a parameter-efficient technique that learns a small set of trainable prompt embeddings ('soft prompts') to adapt model behavior, without retraining the entire model — lower cost, faster training, and the original model is preserved.\n\nA requires updating many/all model parameters — expensive, contradicting the requirement. B describes few-shot prompting/prompt engineering, which relies on manually written examples rather than learned trainable embeddings. D (training from scratch) is by far the most expensive and unnecessary option.",
  tip: "Prompt Engineering → change the words you type. Few-shot Prompting → add examples. Prompt Tuning → learn a small 'soft prompt' while the model stays fixed. Fine-tuning → update the model itself."
},
{
  q: "You are working on a system that needs to calculate the probability of selecting a white ball from a bag containing 3 red, 4 white, and 6 blue balls. The task involves determining whether to implement a rule-based system based on conditional logic or use a machine learning approach (supervised or unsupervised learning) to solve the problem.",
  options: {
    A: "Use a rule-based system based on conditional logic to directly compute the probability.",
    B: "Implement a supervised learning model to learn the patterns and calculate the probability.",
    C: "Apply unsupervised learning to discover the relationship between the colors of the balls and their selection probabilities.",
    D: "Use a deep learning model to automatically detect the probability distribution of the ball colors."
  },
  correct: "A",
  explanation: "This has a deterministic mathematical solution — P(White) = 4/13 — computable directly with a simple formula. No machine learning is needed because the rule is already known.\n\nB: Supervised learning is for making predictions from historical labeled data — there's no learning problem here since the answer is exact math. C: Unsupervised learning discovers hidden structure in unlabeled data, not known probabilities. D: A deep learning model would be unnecessary, expensive, and impractical for a simple fraction calculation.",
  tip: "Ask: is the rule already known? → Rule-Based System. Do I need the computer to learn the rule from data? → Machine Learning. If it's deterministic math or conditional logic, don't reach for ML."
},
{
  q: "Which steps should you follow to use your custom model with Amazon Bedrock, and what key considerations must you keep in mind during this process?",
  options: {
    A: "Upload your custom model to Amazon S3, then register and deploy it directly through the Amazon Bedrock console, ensuring that appropriate IAM permissions are in place.",
    B: "Retrain your custom model using the Bedrock platform to align it with the foundation models before deployment.",
    C: "Convert your custom model into a format compatible with AWS Lambda and integrate it with Bedrock through an API gateway.",
    D: "Use the pre-built foundation models in Bedrock only, as custom models cannot be integrated directly with Bedrock."
  },
  correct: "A",
  explanation: "Amazon Bedrock supports importing custom models: store model artifacts in Amazon S3, import/register the model in Bedrock, and configure IAM permissions so Bedrock can securely access the artifacts.\n\nB: Bedrock does not require retraining a custom model just to align it — import brings in an already-trained model. C: Custom model import is handled through Bedrock-supported workflows, not Lambda/API Gateway conversion. D is incorrect — Bedrock explicitly supports custom model import capabilities.",
  tip: "S3 stores the model, IAM secures access, Bedrock runs the model. Keywords: custom model, model artifacts, S3, import/register, IAM permissions."
},
{
  q: "You have a lengthy document that you need to summarize to extract the key points for a business report. You want to use an AWS service that can automatically generate a concise summary of the document, saving you time and effort. Which AWS service would you use to efficiently summarize the document?",
  options: { A: "Amazon Comprehend", B: "Amazon SageMaker", C: "AWS Glue", D: "Amazon Textract" },
  correct: "A",
  explanation: "Amazon Comprehend is an NLP service that, with its generative AI capabilities, can extract insights and generate concise summaries of lengthy text documents — ideal for business reports.\n\nB: SageMaker could build a custom summarization model, but that's not a pre-built, efficient solution as required. C: Glue is an ETL/data integration service with no NLP capability. D: Textract extracts text from scanned PDFs but doesn't summarize it — a common workflow is Textract (extract) → Comprehend (summarize).",
  tip: "Textract → extract text. Comprehend → understand and summarize text. SageMaker → build ML models. Glue → move/transform data."
},
{
  q: "You are deploying an AI-powered application using Amazon Bedrock, and your organization has strict compliance and auditing requirements. To meet these requirements, you need to track all API calls made to Bedrock, including who made the calls and when they were made. This tracking must be done automatically and stored securely for future audits.\nWhich AWS service would you integrate with Amazon Bedrock to monitor, log, and retain records of all API activity, ensuring compliance and auditability?",
  options: { A: "AWS CloudTrail", B: "Amazon CloudWatch", C: "AWS Config", D: "AWS Shield" },
  correct: "A",
  explanation: "AWS CloudTrail automatically records API activity across your AWS account, including calls to Amazon Bedrock — capturing who made the call, when, which operation, source IP, and metadata, and can store logs securely in S3 for audits.\n\nB: CloudWatch monitors metrics/logs/dashboards/alarms but doesn't automatically record every API call for auditing. C: AWS Config tracks resource configuration changes, not every API request. D: Shield protects against DDoS attacks, unrelated to auditing.",
  tip: "CloudTrail → leaves a trail of every API call. CloudWatch → watches metrics/performance. Config → tracks configuration changes. Shield → DDoS protection. 'Who/when made the API call' → AWS CloudTrail."
},
{
  q: "Your team is tasked with quickly deploying a machine learning model for an image classification project. The project has tight deadlines, and you need to use pre-built solutions to accelerate development. Additionally, the solution must be customizable to fit your specific dataset and requirements. You want to leverage AWS services to get a head start on this task.\nWhich AWS SageMaker feature would you use to quickly deploy a machine learning model with pre-built solutions, and what key benefit does it offer?",
  options: { A: "AWS SageMaker Studio", B: "AWS SageMaker JumpStart", C: "AWS SageMaker Data Wrangler", D: "AWS SageMaker Ground Truth" },
  correct: "B",
  explanation: "SageMaker JumpStart provides pre-trained models, solution templates, and notebooks so you can deploy in a few clicks, fine-tune with your own dataset, and significantly reduce development time — perfect for tight deadlines needing customizable pre-built solutions.\n\nA: SageMaker Studio is the ML development IDE — powerful but has no pre-built models/templates. C: Data Wrangler prepares/cleans data, not pre-built model deployment. D: Ground Truth is a data labeling service, unrelated to deploying pre-built models.",
  tip: "JumpStart → jump start with ready-made models. Studio → ML workspace. Data Wrangler → prepares data. Ground Truth → labels data. Quick deployment + pre-built + customizable → SageMaker JumpStart."
},
{
  q: "You are developing a deep learning model to recognize specific objects in medical images. However, your dataset is relatively small, making it challenging to train a model from scratch effectively. To overcome this limitation, you consider using a model that has already been trained on a large, general dataset and then fine-tuning it for your specific task.\nWhich machine learning approach allows you to leverage a pre-trained model and fine-tune it on your specific dataset, thereby improving performance even with limited data?",
  options: { A: "Supervised Learning", B: "Transfer Learning", C: "Unsupervised Learning", D: "Reinforcement Learning" },
  correct: "B",
  explanation: "Transfer Learning reuses a model already trained on a large dataset, keeps most learned features, and fine-tunes only the final layers on your smaller dataset — ideal when data is limited, training from scratch would be expensive, and you want faster training with better accuracy.\n\nA: Supervised learning is the broader paradigm of learning from labeled data; it doesn't inherently imply reusing a pre-trained model. C: Unsupervised learning discovers patterns in unlabeled data, not fine-tuning pre-trained classifiers. D: Reinforcement learning trains agents via rewards/penalties, unrelated to adapting an image classifier.",
  tip: "Small dataset + pre-trained model + fine-tuning + limited labeled data + reduce training time → Transfer Learning. Like already knowing Spanish makes learning Italian easier."
},
{
  q: "You are working on fine-tuning a large language model in Amazon Bedrock to adapt it to your organization's specific needs. During the fine-tuning process, you want to ensure that the training and inference workloads are handled efficiently, without interruptions or throttling, especially since these processes can be resource-intensive. To achieve this, you decide to manage the throughput capacity to maintain consistent performance.\nWhich Amazon Bedrock feature would you use to allocate a specific amount of throughput capacity during the fine-tuning process, ensuring that the model receives the necessary resources for optimal performance?",
  options: { A: "Auto Scaling", B: "Provisioned Throughput", C: "On-Demand Capacity", D: "Elastic Load Balancing" },
  correct: "B",
  explanation: "Amazon Bedrock Provisioned Throughput reserves a dedicated amount of inference throughput for a foundation or customized model — giving consistent performance, predictable latency, and reduced risk of throttling, ideal for production workloads with steady/high traffic.\n\nA: Auto Scaling adjusts resources for services like EC2/SageMaker endpoints, not Bedrock throughput reservation. C: On-Demand capacity is shared among customers and can be throttled during high demand — it does not guarantee throughput. D: Elastic Load Balancing distributes traffic across compute resources, unrelated to Bedrock inference capacity.",
  tip: "On-Demand = buy a ticket when needed (not guaranteed at peak). Provisioned Throughput = reserve your seat in advance (guaranteed). Guaranteed throughput, dedicated capacity, avoid throttling → Provisioned Throughput."
},
{
  q: "You are developing a global AI application using Amazon Bedrock, and you need a pricing model that offers the most flexibility for handling variable workloads, including the ability to manage traffic bursts across different AWS regions without incurring additional costs. The application will involve text generation, embeddings, and image generation tasks. You want a pricing option that charges only based on usage and supports seamless cross-region inference to maximize performance and resilience.\nWhich Amazon Bedrock pricing model provides the most flexibility for your application, allowing you to pay only for what you use while also supporting cross-region inference without additional charges?",
  options: { A: "Reserved Instances", B: "Spot Instances", C: "On-Demand", D: "Dedicated Hosts" },
  correct: "C",
  explanation: "Amazon Bedrock On-Demand pricing is pay-as-you-go with no upfront commitment, ideal for unpredictable/bursty workloads, and supports cross-region inference (routing requests to available capacity in supported regions) without additional cross-region charges.\n\nA: Reserved Instances are an EC2 pricing model, not used by Bedrock. B: Spot Instances are discounted, interruptible EC2 instances — not used for Bedrock inference. D: Dedicated Hosts provide physical EC2 servers for licensing/compliance, unrelated to Bedrock pricing.",
  tip: "On-Demand → call a taxi when needed, pay per ride. Provisioned Throughput → reserve your own shuttle. Pay only for what you use + variable workloads + cross-region inference → On-Demand."
},
{
  q: "Your organization wants to enhance customer engagement through personalized, conversational experiences on a website and mobile app. You need an AI-powered chatbot that understands natural language, responds to customer queries, provides personalized recommendations, is easy to deploy, customizable, and can handle high volumes of real-time interactions.",
  options: { A: "Amazon Lex", B: "AWS Q", C: "Amazon Polly", D: "AWS DeepComposer" },
  correct: "A",
  explanation: "Amazon Lex is AWS's managed service for building conversational AI applications, providing NLU, ASR for voice bots, multi-turn conversations, easy deployment across channels, automatic scaling, and integration with Lambda/Bedrock — purpose-built for customer-facing chatbots.\n\nB: AWS Q is an AI assistant for developers and enterprise productivity, not customer-facing chatbots. C: Polly converts text to speech and doesn't manage conversations. D: DeepComposer is an educational service for generating music, completely unrelated.",
  tip: "Amazon Lex → Chatbots & conversational AI. Amazon Polly → Text-to-Speech. Amazon Transcribe → Speech-to-Text. Amazon Comprehend → NLP/text analysis. Amazon Rekognition → image/video analysis."
},
{
  q: "Your organization needs to store large amounts of structured and unstructured data (documents, images, videos). The storage must be highly durable, scalable, easily accessible, and integrate with other AWS services for processing and analytics.",
  options: { A: "Amazon RDS", B: "Amazon S3", C: "Amazon Redshift", D: "Amazon DynamoDB" },
  correct: "B",
  explanation: "Amazon S3 is object storage with virtually unlimited scalability and 11 nines durability, ideal for documents, images, videos, backups, and data lakes — integrating seamlessly with Bedrock, SageMaker, Glue, Athena, EMR, Rekognition, and Lambda.\n\nA: RDS is a managed relational database, best for structured transactional data, not general object storage. C: Redshift is a data warehouse for analytics, not general-purpose file storage. D: DynamoDB is a NoSQL key-value database optimized for low-latency application data, not large object storage.",
  tip: "Amazon S3 → object storage (documents, images, videos, backups, data lakes). RDS → relational databases. DynamoDB → NoSQL apps. Redshift → data warehousing/analytics."
},
{
  q: "Which feature of AWS QuickSight is particularly useful for getting insights faster and making better decisions with the help of your generative AI assistant by enabling natural language queries and generating instant visualizations?",
  options: { A: "QuickSight ML Insights", B: "Amazon Q in QuickSight", C: "QuickSight SPICE", D: "QuickSight Dashboards" },
  correct: "B",
  explanation: "Amazon Q in QuickSight is the generative AI capability that lets users ask questions in natural language, generate instant charts/visualizations, receive AI-generated summaries, and explore data without SQL or manual dashboard creation.\n\nA: ML Insights provides anomaly detection and forecasting, not conversational natural-language Q&A. C: SPICE is an in-memory analytics engine that speeds up performance but doesn't generate AI-powered visualizations from natural language. D: Dashboards display visualizations/reports but aren't the generative AI natural-language feature.",
  tip: "Amazon Q in QuickSight → natural language Q&A, AI-generated insights, instant visualizations. SPICE → acceleration. ML Insights → forecasting/anomaly detection. Dashboards → visualization/reporting."
},
{
  q: "You are deploying a generative AI chatbot using AWS Bedrock and need to ensure it remains professional and safe by automatically detecting inappropriate language (such as curse words) in user interactions.",
  options: { A: "Amazon Bedrock Logging", B: "Amazon Bedrock Guardrails", C: "Amazon GuardDuty", D: "CloudWatch Alarms" },
  correct: "B",
  explanation: "Amazon Bedrock Guardrails provides built-in safety controls including profanity/offensive language filtering, blocking harmful content, denied topics, and PII filtering — exactly the content moderation feature needed here.\n\nA: Bedrock Logging records prompts/responses for auditing but doesn't moderate or block content. C: GuardDuty detects AWS security threats and malicious activity, unrelated to AI content moderation. D: CloudWatch Alarms monitor AWS metrics and trigger notifications; they cannot analyze or filter chatbot conversations.",
  tip: "Guardrails → content moderation, profanity filtering, PII detection, denied topics. Knowledge Bases → RAG. Agents → multi-step automation. Model Evaluation → compare model quality."
},
{
  q: "You have deployed a machine learning model using AWS SageMaker and need to continuously monitor the model's predictions for performance degradation or data drift compared to a predefined baseline.",
  options: { A: "SageMaker Debugger", B: "SageMaker Model Monitor", C: "SageMaker Autopilot", D: "SageMaker Clarify" },
  correct: "B",
  explanation: "Amazon SageMaker Model Monitor continuously monitors deployed models in production for data drift, model quality degradation, prediction drift, and feature attribution drift — comparing incoming production data against a training baseline and alerting on significant deviations.\n\nA: SageMaker Debugger monitors/debugs the training process (e.g. vanishing gradients), not deployed model performance. C: Autopilot automatically builds/trains/tunes models — it doesn't monitor production. D: Clarify detects bias and explains predictions, focusing on fairness rather than ongoing production drift monitoring.",
  tip: "Model Monitor → monitor deployed models for data drift/quality. Debugger → debug training. Clarify → bias/explainability. Autopilot → automatic model building (AutoML)."
},
{
  q: "You have developed a regression model to predict house prices. You need an error metric that penalizes large prediction errors more heavily, because large deviations are particularly important for your application.",
  options: { A: "Mean Absolute Error (MAE)", B: "Mean Squared Error (MSE)", C: "Root Mean Squared Error (RMSE)", D: "R-squared (R²)" },
  correct: "B",
  explanation: "Mean Squared Error (MSE) squares each prediction error before averaging, so larger errors contribute disproportionately more to the final metric — making it the preferred choice when large errors should be heavily penalized.\n\nA: MAE uses the absolute value of errors, treating all errors equally and being less sensitive to outliers. C: RMSE also penalizes large errors (it's the square root of MSE) but the more direct answer when the question asks specifically about squaring errors is MSE. D: R-squared measures how well the model explains variance — it's a goodness-of-fit metric, not an error metric.",
  tip: "MAE → average absolute error, less sensitive to outliers. MSE → squares errors, heavily penalizing large mistakes. RMSE → square root of MSE, interpretable in original units. R² → goodness-of-fit, not an error metric."
},
{
  q: "As large language models (LLMs) are increasingly being used to generate code, developers might be tempted to copy this code directly into their projects. However, doing so without careful consideration can lead to significant issues. One of the primary concerns is the potential violation of intellectual property rights or other legal obligations.\nWhat are the major problems that developers might face when copying code generated by LLMs without proper attribution or understanding? (Choose all that apply)",
  options: { A: "Plagiarism", B: "Incomplete Documentation", C: "Copywriting", D: "Copyright Infringement", E: "Inefficient Code Execution" },
  correct: ["A", "D"],
  explanation: "Copying generated code without attribution can constitute Plagiarism, especially in academic/organizational settings. LLMs may also generate code resembling copyrighted material, exposing developers to Copyright Infringement risk if licensing/ownership isn't verified.\n\nB: Incomplete documentation is a code-quality issue, not a primary legal/ethical concern here. C: Copywriting refers to marketing content, unrelated to software code. E: Inefficient execution is a performance issue, not an intellectual property concern — the question specifically asks about legal obligations.",
  tip: "When AI/AWS exams mention legal, ethical, or IP risks of AI-generated code, think: Plagiarism + Copyright Infringement."
},
{
  q: "Your organization is using a generative AI model that processes text and charges based on the number of tokens used for both input and output. The current usage is leading to higher costs, and you are looking for ways to optimize and reduce these costs without significantly impacting the performance or accuracy of the model.\nIf you want to reduce the cost of using the generative AI model, which parameter would be more effective to minimize?",
  options: { A: "Reduce the number of input tokens", B: "Reduce the number of output tokens", C: "Increase the number of input tokens", D: "Increase the number of output tokens" },
  correct: "B",
  explanation: "Generative AI providers (Bedrock, OpenAI, Anthropic, Meta) typically price output tokens higher than input tokens. So limiting the maximum output length and avoiding unnecessary verbosity is the most effective way to reduce inference cost.\n\nA: Reducing input tokens helps but input tokens are usually cheaper, so the impact is smaller. C: Increasing input tokens increases the total billable tokens, raising cost. D: Increasing output tokens is the most expensive option since output is billed at a higher rate.",
  tip: "To reduce LLM inference cost, in order of impact: 1) reduce output tokens (largest savings), 2) reduce unneeded input tokens, 3) cache prompts/responses, 4) use a smaller/cheaper model."
},
{
  q: "You are working on an AI-driven content generation project that requires the creation of both descriptive text and corresponding images based on a single input prompt. The project aims to produce cohesive and visually appealing content that combines narrative elements with visuals, such as generating a story along with illustrations. You need to select a model that can handle both text generation and image creation from the same prompt.\nWhich type of model would be most suitable for generating both descriptive text and corresponding images from a single input prompt?",
  options: { A: "Text-only language model", B: "Image-only generation model", C: "Multimodal model", D: "Sequential text and image processing pipeline" },
  correct: "C",
  explanation: "A multimodal model can understand and generate multiple data types (text, images, and sometimes audio/video) from a single prompt — exactly what's needed to generate a story with matching illustrations in one step (e.g. GPT-4o, Amazon Nova, Gemini).\n\nA: A text-only LLM can generate the story but cannot generate images. B: An image-only model (e.g. Stable Diffusion) can create images but cannot generate the narrative. D: A pipeline chains multiple separate models together — the question specifically asks for a single model type.",
  tip: "Text-only LLM → text only. Image Generation Model → images only. Multimodal Model → text + images (and sometimes audio/video) from one prompt. Pipeline → multiple models working together, not a single model."
},
{
  q: "You are developing a recommendation system that requires finding the closest matches to a user's preferences from a large dataset of products. Additionally, you need to improve the search experience on your platform by understanding the context and meaning behind user queries to return more relevant results, even when the exact keywords are not present in the database.\nWhich features of Amazon OpenSearch Service will help you achieve it? (Choose two correct answers)",
  options: { A: "k Nearest Neighbor (KNN) Search", B: "Full-Text Keyword Search", C: "Semantic Search", D: "Time Series Analysis", E: "Data Warehousing" },
  correct: ["A", "C"],
  explanation: "k-NN Search finds the closest items (nearest neighbors) in vector space — ideal for recommendation systems and similarity search. Semantic Search uses embeddings to understand meaning/intent behind a query even when exact keywords are missing.\n\nB: Full-Text Keyword Search matches exact words/phrases but doesn't understand meaning — it would miss relevant results without exact keyword matches. D: Time Series Analysis is for logs/metrics/monitoring, unrelated to recommendations or semantic search. E: Data Warehousing is for analytical storage/reporting, not vector search.",
  tip: "KNN Search → finds similar vectors (recommendations, RAG, embeddings). Semantic Search → understands intent/meaning. Full-Text Search → keywords only. Embeddings + recommendations + similarity + meaning → KNN + Semantic Search."
},
{
  q: "What are the primary advantages of fine-tuning a pre-trained model for your specific use case? (Choose two correct answers)",
  options: { A: "Reduces the need for large amounts of data", B: "Allows the model to learn completely new tasks from scratch", C: "Improves the model's performance on domain-specific tasks", D: "Completely replaces the original model's knowledge with new information", E: "Speeds up the training process compared to training a model from scratch" },
  correct: ["C", "E"],
  explanation: "Fine-tuning adapts a pre-trained model to a specific domain (medical, legal, financial, DevOps), Improving Performance on Domain-Specific Tasks. Because the model already knows general language patterns, fine-tuning only adjusts it for your domain, making it Faster than training from scratch.\n\nA is often true in practice but isn't the primary advantage AWS exams emphasize. B is wrong — fine-tuning builds on existing knowledge rather than starting from scratch. D is wrong — fine-tuning adapts the model, it doesn't erase its prior knowledge.",
  tip: "Benefits of fine-tuning: better domain performance + faster/cheaper than training from scratch. It does not train from scratch and does not erase existing knowledge."
},
{
  q: "You are building a machine learning model using a dataset that includes demographic information. You want to ensure that your model does not favor or disadvantage any particular group and that it performs fairly across all segments of the population. Additionally, you need to check whether the dataset contains any imbalances that might lead to biased outcomes.\nWhich Amazon SageMaker feature would you use to detect bias in your dataset and model, and to ensure that the data does not contain imbalanced representations that could affect model fairness?",
  options: { A: "SageMaker Data Wrangler", B: "SageMaker Clarify", C: "SageMaker Model Monitor", D: "SageMaker Autopilot" },
  correct: "B",
  explanation: "Amazon SageMaker Clarify detects and explains bias in both training datasets (pre-training bias) and model predictions (post-training bias), providing fairness metrics, feature importance, and imbalance detection reports.\n\nA: Data Wrangler prepares/cleans/transforms data but isn't designed specifically for bias detection. C: Model Monitor tracks deployed models for drift and quality after deployment, not fairness/bias specifically. D: Autopilot automates model building (AutoML), unrelated to bias detection.",
  tip: "Bias, fairness, demographic groups, explainability, feature importance → Amazon SageMaker Clarify."
},
{
  q: "You are preparing to deploy a machine learning model using Amazon SageMaker and want to ensure that key information about the model, including its performance, intended use, and limitations, is well-documented. Which feature in Amazon SageMaker helps you create and manage a comprehensive document that includes this information?",
  options: { A: "SageMaker Model Metadata", B: "SageMaker Model Registry", C: "SageMaker Model Summary", D: "SageMaker Model Card" },
  correct: "D",
  explanation: "Amazon SageMaker Model Cards provide standardized documentation of a model's purpose, training data, performance metrics, evaluation results, limitations, ethical considerations, and risk/compliance information — useful for governance and responsible AI.\n\nA: Model Metadata stores metadata for ML artifacts/experiments, not comprehensive documentation. B: The Model Registry manages versioning and deployment approvals, not the documentation itself. C: There is no primary SageMaker feature called 'Model Summary'.",
  tip: "Model Card → documents purpose, performance, limitations, risks, intended use. Model Registry → versioning/lifecycle management. Documentation, intended use, limitations, governance → SageMaker Model Card."
},
{
  q: "You are responsible for ensuring that your organization's use of AWS services complies with relevant security and regulatory standards. Which AWS service provides on-demand access to security and compliance reports, as well as select online agreements, to help with this task?",
  options: { A: "AWS Security Hub", B: "AWS Artifacts", C: "AWS Config", D: "AWS CloudTrail" },
  correct: "B",
  explanation: "AWS Artifact provides on-demand access to AWS security and compliance reports (SOC, ISO, PCI DSS, etc.) and online agreements such as BAA/GDPR DPA — specifically designed to help customers meet compliance/audit requirements.\n\nA: Security Hub aggregates security findings but doesn't provide downloadable compliance reports/legal agreements. C: AWS Config monitors resource configuration compliance, but doesn't provide AWS's own compliance reports. D: CloudTrail records API activity for auditing, not for downloading compliance documents.",
  tip: "AWS Artifact → download compliance reports and legal agreements. Config → resource compliance monitoring. CloudTrail → API logging. Security Hub → centralized security findings. SOC/ISO/PCI DSS reports → AWS Artifact."
},
{
  q: "An ML engineer is working on implementing Retrieval Augmented Generation (RAG) for a foundation model and needs a database service for similarity searches and vector embeddings. Which AWS services are suitable?",
  options: { A: "Amazon OpenSearch Service", B: "Amazon DynamoDB", C: "Amazon RDS for PostgreSQL", D: "Amazon S3", E: "Amazon Redshift" },
  correct: ["A", "C"],
  explanation: "Amazon OpenSearch Service supports vector search, k-NN, and semantic search — one of the most common vector databases for RAG. Amazon RDS for PostgreSQL, using the pgvector extension, also supports storing embeddings and performing similarity/nearest-neighbor search.\n\nB: DynamoDB can store embeddings but has no native vector similarity search. D: S3 is object storage — it stores documents but cannot perform vector similarity searches. E: Redshift is a data warehouse for analytics, not a vector database for RAG retrieval.",
  tip: "Vector database options for RAG: OpenSearch Service (k-NN, semantic search) and RDS for PostgreSQL (pgvector) — both support vector search. DynamoDB, S3, and Redshift do not natively."
},
{
  q: "An online education company is creating an AI teaching assistant using a foundation model. Which technique should be used to ensure the AI can follow specific directions and provide guided responses?",
  options: { A: "Instruction Fine-Tuning", B: "Data Augmentation", C: "Unsupervised Learning", D: "Transfer Learning" },
  correct: "A",
  explanation: "Instruction Fine-Tuning (IFT) trains a pre-trained foundation model on instruction-response pairs, teaching it to follow user instructions accurately and generate guided, structured responses — the technique behind models like ChatGPT, Claude, and instruction-tuned Amazon Nova.\n\nB: Data Augmentation increases dataset size/diversity but doesn't teach instruction-following. C: Unsupervised Learning discovers patterns in unlabeled data, unrelated to instruction following. D: Transfer Learning is the broader concept of adapting a pre-trained model — Instruction Fine-Tuning is the more precise, specific answer here.",
  tip: "AI assistant, follow instructions, guided responses, chatbot behavior → Instruction Fine-Tuning."
},
{
  q: "A company wants to enhance the consistency and quality of responses from a Large Language Model (LLM) by allowing it to access external sources of knowledge. Which technique will achieve this with the least development effort?",
  options: { A: "Retrieval-Augmented Generation (RAG)", B: "Custom Fine-Tuning", C: "Data Augmentation", D: "Transfer Learning" },
  correct: "A",
  explanation: "RAG allows an LLM to retrieve relevant information from external knowledge sources at inference time, without retraining the model whenever the knowledge changes — the lowest-effort way to keep responses accurate and consistent.\n\nB: Custom Fine-Tuning requires labeled data, is more expensive, takes longer, and doesn't easily incorporate frequently changing knowledge. C: Data Augmentation increases training data diversity but doesn't allow real-time retrieval of external knowledge. D: Transfer Learning still involves training and doesn't provide real-time access to external knowledge sources.",
  tip: "External documents, knowledge base, latest information, least development effort, better factual responses → Retrieval-Augmented Generation (RAG)."
},
{
  q: "A company is looking to leverage generative AI to automatically generate product descriptions for its website. What is a key limitation of using generative AI in this scenario that the company should consider?",
  options: {
    A: "Generative AI may generate biased or unsuitable content that needs to be reviewed and corrected by humans.",
    B: "Generative AI cannot produce content in various languages.",
    C: "Generative AI models cannot integrate with existing website platforms.",
    D: "Generative AI requires a continuous internet connection to operate."
  },
  correct: "A",
  explanation: "Generative AI may hallucinate facts, introduce bias, or produce inappropriate/misleading descriptions — so human-in-the-loop review is recommended before publishing AI-generated content.\n\nB is incorrect — modern LLMs support dozens of languages. C is incorrect — generative AI integrates through APIs, SDKs, and cloud services. D is incorrect — many models can run offline/on-premises; internet connectivity is not a fundamental limitation of generative AI itself.",
  tip: "Common Generative AI limitations tested on exams: hallucinations, bias, toxic/inappropriate output, human review required, factual inaccuracies. Product descriptions / content generation → AI content should be reviewed by humans before publishing."
},
{
  q: "A data science team aims to enhance a model's performance by increasing the number of variables in the training dataset and modifying the algorithm's behavior.\nWhich two ML pipeline steps will help achieve these goals? (Select TWO)",
  options: { A: "Feature Engineering", B: "Hyperparameter Tuning", C: "Data Augmentation", D: "Model Evaluation", E: "Algorithm Selection" },
  correct: ["A", "B"],
  explanation: "Feature Engineering creates, transforms, or selects features that increase the number of variables representing the data. Hyperparameter Tuning adjusts settings that control how the algorithm learns (learning rate, tree depth, etc.), directly modifying the algorithm's behavior.\n\nC: Data Augmentation increases the number of training samples, not the number of variables (features). D: Model Evaluation measures performance but doesn't modify the dataset or algorithm. E: Algorithm Selection means choosing a different algorithm entirely, not tuning the current one's behavior.",
  tip: "Creating/transforming variables or improving input data → Feature Engineering. Changing how the model learns without changing the data → Hyperparameter Tuning (not Algorithm Selection, which means picking a different model)."
},
{
  q: "Which technique do Foundation Models use to generate labels from input data without needing explicit labeled examples?",
  options: { A: "Self-supervised Learning", B: "Supervised Learning", C: "Reinforcement Learning", D: "Unsupervised Learning" },
  correct: "A",
  explanation: "Foundation Models are primarily pre-trained using self-supervised learning — the model automatically creates its own training labels from the input data (e.g. masked word prediction, or predicting the next token, which already exists in the text).\n\nB: Supervised Learning requires human-labeled datasets, impractical at internet scale. C: Reinforcement Learning (e.g. RLHF) may be used later to align responses, but it's not the primary pre-training technique. D: Unsupervised Learning discovers hidden patterns without creating prediction targets — Foundation Models go further by generating their own prediction targets, making self-supervised the more precise answer.",
  tip: "Supervised → human provides labels. Self-supervised → model generates labels from input data. Unsupervised → no labels, discover patterns. Reinforcement → learns via rewards/penalties. Foundation Models / LLMs / pre-training → Self-supervised Learning."
},
{
  q: "What is the correct sequence of steps in the machine learning process?",
  options: {
    A: "Model Training → Data Collection → Data Preprocessing → Model Evaluation",
    B: "Data Preprocessing → Model Evaluation → Model Training → Data Collection",
    C: "Model Evaluation → Model Training → Data Collection → Data Preprocessing",
    D: "Data Collection → Data Preprocessing → Model Training → Model Evaluation"
  },
  correct: "D",
  explanation: "The standard ML workflow: 1) Data Collection — gather data; 2) Data Preprocessing — clean and prepare it; 3) Model Training — train the algorithm on processed data; 4) Model Evaluation — measure performance using validation/test data and metrics like accuracy or RMSE.\n\nA starts with model training before any data is collected, which is impossible. B evaluates the model before it's trained and collects data last. C starts with evaluation even though no model or dataset exists yet — all reverse the natural order.",
  tip: "Collect → Prepare → Train → Evaluate → Deploy → Monitor. Data Collection always comes first; Model Evaluation always comes after training. Eliminate any option showing evaluation before training, or training before data collection."
},
{
  q: "Which two generative AI techniques are utilized in Amazon Q Business workflow? (Select TWO)",
  options: { A: "Generative Adversarial Network (GAN)", B: "Variational Autoencoders (VAE)", C: "Diffusion Model", D: "Retrieval-Augmented Generation (RAG)", E: "Large Language Model (LLM)" },
  correct: ["D", "E"],
  explanation: "Amazon Q Business uses Retrieval-Augmented Generation (RAG) to retrieve relevant info from enterprise data sources (SharePoint, S3, Salesforce, etc.) before generating a response, and a Large Language Model (LLM) to understand intent, reason over retrieved data, and generate conversational responses.\n\nA: GANs generate realistic synthetic data (images/video/audio), not used in Q Business's search/QA workflow. B: VAEs are used for image generation and latent representation learning, not part of Q Business. C: Diffusion Models generate images (e.g. Amazon Nova Canvas), unrelated to Q Business's enterprise knowledge retrieval focus.",
  tip: "Architecture: User Question → RAG retrieves enterprise documents → LLM generates the final response. GANs/VAEs/Diffusion Models are for image/multimedia generation, not Amazon Q Business."
},
{
  q: "Which of the following best describes where Amazon Q Developer can be utilized?",
  options: {
    A: "Amazon Q Developer is exclusively available through the AWS Management Console.",
    B: "Amazon Q Developer is not accessible through either IDEs or the AWS Management Console.",
    C: "Amazon Q Developer is exclusively available through integrated development environments (IDEs).",
    D: "Amazon Q Developer can be accessed both through IDEs and the AWS Management Console."
  },
  correct: "D",
  explanation: "Amazon Q Developer is available in multiple environments — IDEs (VS Code, JetBrains), the AWS Management Console, AWS Console integrations (e.g. CloudFormation), AWS Toolkit environments, and supported command-line experiences — giving developers AI assistance wherever they work.\n\nA and C are each incomplete because Q Developer is available in both places, not exclusively one. B is the opposite of reality — Q Developer is specifically designed to work in both locations.",
  tip: "AWS exams often use words like 'only' or 'exclusively' — these are frequently wrong. Amazon Q Developer follows developers everywhere: available in IDEs AND the AWS Management Console."
},
{
  q: "A financial services company wants to build an AI assistant that answers employee questions using thousands of internal policy documents stored in Amazon S3. The company updates these documents daily and wants the assistant to always use the latest information without retraining the foundation model.\nWhich solution best satisfies these requirements?",
  options: {
    A: "Fine-tune a foundation model every time new documents are uploaded.",
    B: "Use Amazon Bedrock Knowledge Bases with Retrieval-Augmented Generation (RAG).",
    C: "Increase the model's temperature so it generates more up-to-date responses.",
    D: "Deploy the foundation model on Amazon EC2 and manually upload new documents to the model."
  },
  correct: "B",
  explanation: "RAG retrieves the latest information from external sources at inference time. Amazon Bedrock Knowledge Bases automatically index supported sources like Amazon S3, so the model answers using the newest documents without retraining.\n\nA: Fine-tuning after every document update would be expensive and inefficient for frequently changing knowledge. C: Temperature only affects randomness/creativity, not retrieval of new information. D: Self-hosting on EC2 doesn't automatically give the model access to updated documents — you'd still need to build a retrieval pipeline yourself.",
  tip: "Documents change frequently → think RAG, not Fine-tuning."
},
{
  q: "A healthcare organization wants to summarize patient visit notes using a foundation model. The notes contain personally identifiable information (PII), and the organization must ensure sensitive data is protected before it reaches the model.\nWhich AWS service should be used to automatically detect and redact sensitive information before inference?",
  options: { A: "Amazon Rekognition", B: "Amazon Textract", C: "Amazon Comprehend", D: "Amazon Polly" },
  correct: "C",
  explanation: "Amazon Comprehend can identify entities such as names, addresses, and other PII within text, making it suitable for detecting and redacting sensitive information before sending prompts to an LLM.\n\nA: Rekognition analyzes images and video, not text documents. B: Textract extracts text from scanned documents but doesn't specialize in PII detection. D: Polly converts text into speech, unrelated to PII detection.",
  tip: "Textract → read text. Comprehend → understand text (and detect PII). Polly → speak text. Transcribe → speech to text."
},
{
  q: "An online retailer wants to recommend products based on customer interests and also allow customers to search using natural language instead of exact keywords.\nWhich TWO AWS capabilities best meet these requirements?",
  options: { A: "Amazon OpenSearch k-Nearest Neighbor (k-NN) Search", B: "Amazon OpenSearch Semantic Search", C: "Amazon CloudWatch Logs", D: "Amazon S3 Glacier", E: "Amazon DynamoDB Global Tables" },
  correct: ["A", "B"],
  explanation: "k-NN search compares vector embeddings to find similar products, ideal for recommendation systems. Semantic Search understands the meaning behind user queries, even when exact keywords are missing.\n\nC: CloudWatch monitors logs and metrics but doesn't perform search. D: Glacier is an archival storage service, unrelated to search/recommendations. E: DynamoDB Global Tables provide multi-region database replication, not semantic search.",
  tip: "Embeddings, vector search, recommendation, similarity → think k-NN + Semantic Search."
},
{
  q: "A development team has created a prompt that consistently produces accurate responses from a foundation model. Multiple teams across the organization now need to reuse the same prompt while maintaining version control and centralized management.\nWhich Amazon Bedrock capability should they use?",
  options: { A: "Bedrock Agents", B: "Prompt Management", C: "Guardrails", D: "Model Evaluation" },
  correct: "B",
  explanation: "Prompt Management enables teams to create, version, organize, and reuse prompts consistently across applications — exactly matching the requirement for centralized, version-controlled prompt reuse.\n\nA: Agents orchestrate workflows and tool usage, not prompt versioning. C: Guardrails enforce safety policies rather than storing/versioning prompts. D: Model Evaluation compares model performance, unrelated to prompt reuse.",
  tip: "Reusing, sharing, or versioning prompts → almost always Prompt Management."
},
{
  q: "A company is comparing two foundation models before deploying one into production. They want to measure response quality, latency, and accuracy using the same dataset.\nWhich Amazon Bedrock feature should they use?",
  options: { A: "Bedrock Agents", B: "Bedrock Model Evaluation", C: "Knowledge Bases", D: "Guardrails" },
  correct: "B",
  explanation: "Bedrock Model Evaluation allows organizations to compare foundation models using objective metrics and human evaluation before deployment — exactly what's needed to compare response quality, latency, and accuracy.\n\nA: Agents coordinate multi-step workflows, not model comparison. C: Knowledge Bases provide retrieval for RAG, unrelated to benchmarking models. D: Guardrails focus on safety and policy enforcement, not performance comparison.",
  tip: "Comparing models, benchmarking, choosing the best FM → Model Evaluation."
},
{
  q: "A company is deploying a generative AI application that processes confidential legal documents. They want to follow AWS security best practices while minimizing operational overhead.\nWhich TWO actions should they take?",
  options: { A: "Encrypt the documents using AWS KMS.", B: "Grant every developer AdministratorAccess for easier debugging.", C: "Follow the principle of least privilege using IAM.", D: "Store API keys directly in application source code.", E: "Disable logging to reduce storage costs." },
  correct: ["A", "C"],
  explanation: "AWS KMS encrypts sensitive information at rest and integrates with many AWS services. IAM least privilege ensures users receive only the permissions required for their roles — both are core AWS security best practices for confidential data.\n\nB: Granting AdministratorAccess to everyone violates least privilege and AWS security best practices. D: Secrets should be stored in AWS Secrets Manager, not hardcoded in source code. E: Disabling logging removes the ability to audit, troubleshoot, and demonstrate compliance.",
  tip: "For confidential data questions, the safest combination is usually: IAM Least Privilege + Encryption (AWS KMS)."
},
{
  q: "A media company uses Amazon Bedrock to generate article summaries. Editors notice that the model occasionally invents facts that are not present in the source article.\nWhat is this behavior called?",
  options: { A: "Embedding Drift", B: "Hallucination", C: "Overfitting", D: "Reinforcement Learning" },
  correct: "B",
  explanation: "Hallucination occurs when an LLM generates information that sounds convincing but is factually incorrect or unsupported by the source data — exactly the behavior described.\n\nA: 'Embedding Drift' is not the standard term for fabricated responses. C: Overfitting refers to poor generalization during model training, not fabricating facts at inference. D: Reinforcement Learning is a training technique, unrelated to hallucinated output.",
  tip: "If the model makes up facts not present in the source, the answer is almost always Hallucination."
},
{
  q: "A startup wants to build a customer support chatbot as quickly as possible using managed AWS services. The chatbot should answer questions using company documents stored in Amazon S3, minimize custom machine learning development, and automatically retrieve relevant information during conversations.\nWhich solution is the BEST choice?",
  options: {
    A: "Train a custom model from scratch using Amazon SageMaker.",
    B: "Fine-tune a foundation model every week with the latest company documents.",
    C: "Use Amazon Bedrock Knowledge Bases together with a foundation model.",
    D: "Store documents in Amazon DynamoDB and manually add them to every prompt."
  },
  correct: "C",
  explanation: "Amazon Bedrock Knowledge Bases provide a managed RAG solution that automatically retrieves relevant information from Amazon S3 and supplies it to the foundation model, minimizing custom ML development while keeping responses current.\n\nA: Training a custom model from scratch is expensive, time-consuming, and unnecessary for this use case. B: Frequent fine-tuning is inefficient when documents change regularly. D: Manually copying documents into prompts doesn't scale and increases operational complexity.",
  tip: "Amazon S3 + company documents + chatbot + latest information + minimal development effort → Amazon Bedrock + Knowledge Bases + RAG."
}
];
