export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-4xl font-serif text-center my-7 text-teal-700 dark:text-teal-300'>
            Welcome to Mindfull Wellness
          </h1>
          <div className='text-1xl font-serif text-gray-00 flex flex-col gap-6'>
            <p>
              At Mindfull Wellness, we believe in the power of mindfulness and holistic well-being. Our platform is dedicated to providing you with resources and insights to enhance your mental and physical health journey.
            </p>

            <p>
              Whether you're a seasoned practitioner or new to mindfulness, you'll find a wealth of articles, guides, and practices tailored to support your growth. From meditation techniques to nutrition tips, we cover a wide range of topics to help you thrive.
            </p>

            <p>
              Join our community of like-minded individuals committed to living a balanced and fulfilling life. Share your experiences, ask questions, and connect with others on a similar path. Together, we can cultivate a supportive environment where everyone can flourish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
