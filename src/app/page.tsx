// src/app/home/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-4xl md:text-3xl font-bold mb-6 animate-slideIn text-center">Welcome to My Portfolio</h1>

      {/* Profile Image Section */}
      <div className="mb-8 shadow-lg">
      <Image
      src="/azq212.png"
      alt="azmat"
      height={300}
      width={300}
      className="object-cover rounded-[100%] glowing-border"
      />
</div>

      <p className="text-lg text-white mb-6 text-center">Showcasing my work and skills in web development.</p>

      <div className="space-y-4 mb-8 flex flex-col items-center sm:flex-row sm:space-x-4 sm:space-y-0">
  <Link href="/About">
    <button className="w-full sm:w-auto px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
      About Me
    </button>
  </Link>
  <Link href="/Contact">
    <button className="w-full sm:w-auto px-3 py-2 sm:px-4 sm:py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
      Contact Me
    </button>
  </Link>
</div>



      <section className="w-full max-w-4xl mt-8">
        <h2 className="text-2xl font-semibold text-center mb-10 animate-slideIn">My Projects</h2>

        {/* Portfolio Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="bg-white p-4 rounded shadow-lg glowing-border-1">
            <Image
              src="/pr1.png"
              alt="Project 1"
              width={300}
              height={300}
              className="w-full rounded mb-4"
            />
            <div className="text-center text-black">
              <p className="font-semibold">Project 1</p>
              <p>For details, click below</p>
              <Link href="https://assignment-web-page1.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold hover:underline">
                Web Page Design
              </Link>
            </div>
          </div>

          {/* Additional Projects */}
          <div className="bg-white p-4 rounded shadow-lg glowing-border-1">
            <Image
              src="/pr2.png"
              alt="Project 2"
              width={300}
              height={300}
              className="w-full rounded mb-4"
            />
            <div className="text-center text-black">
              <p className="font-semibold">Project 2</p>
              <p>For details, click below</p>
              <Link href="https://azmataliakbar-nextjs-assignment-3.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold hover:underline">
                Web Page with Figma design
              </Link>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-lg glowing-border-1">
            <Image
              src="/pr3.png"
              alt="Project 3"
              width={300}
              height={300}
              className="w-full rounded mb-4"
            />
            <div className="text-center text-black">
              <p className="font-semibold">Project 3</p>
              <p>For details, click below</p>
              <Link href="https://azmat-sample-reume-from-figma-design.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold hover:underline">
                Portfolio with Figma design
              </Link>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-lg glowing-border-1">
            <Image
              src="/pr4.png"
              alt="Project 4"
              width={300}
              height={300}
              className="w-full rounded mb-4"
            />
            <div className="text-center text-black">
              <p className="font-semibold">Project 4</p>
              <p>For details, click below</p>
              <Link href="https://azmatalaiakbar-audio-player-awno3k2s9.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold hover:underline">
              Audio Player App
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded shadow-lg glowing-border-1">
            <Image
              src="/pr5.png"
              alt="Project 5"
              width={300}
              height={300}
              className="w-full rounded mb-4"
            />
            <div className="text-center text-black">
              <p className="font-semibold">Project 5</p>
              <p>For details, click below</p>
              <Link href="https://azmataliakbar-snake-game-2b7uhyw7u-azmat-alis-projects-eb08bc9e.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold hover:underline">
                Snake Game
              </Link>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-lg glowing-border-1">
            <Image
              src="/pr6.png"
              alt="Project 6"
              width={300}
              height={300}
              className="w-full rounded mb-4"
            />
            <div className="text-center text-black">
              <p className="font-semibold">Project 6</p>
              <p>For details, click below</p>
              <Link href="https://azmataliakbar-invoice-generator.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold hover:underline">
                Invoice Generator
              </Link>
            </div>
          </div>

        </div>

        {/* Projects List */}
        <div className="bg-gray-50 p-6 mt-10 rounded-lg shadow-lg glowing-border ">
          <h3 className="text-xl text-black font-semibold mb-4">Projects List</h3>
          <p className="text-black mb-4">For details click links:</p>
          <ul className="list-disc list-inside text-black space-y-2">
            <li><a href="https://azmatali-birthday-wish.vercel.app/" className="text-blue-500 hover:underline">1. Birthday</a></li>
            <li><a href="https://azmataliakbar-bmi-calculator.vercel.app/" className="text-blue-500 hover:underline">2. BMI</a></li>
            <li><a href="https://azmataliakbar-color-picker.vercel.app/" className="text-blue-500 hover:underline">3. Color Picker</a></li>
            <li><a href="https://azmataliakbar-digital-clock-1.vercel.app/" className="text-blue-500 hover:underline">5. Digital Clock</a></li>
            <li><a href="https://azmataliakbar-count-down-timer.vercel.app/" className="text-blue-500 hover:underline">6. Count Down Timer</a></li>
            <li><a href="https://azmataliakbar-number-guessing-game.vercel.app/" className="text-blue-500 hover:underline">7. Guess Number</a></li>
            <li><a href="https://azmataliakbar-password-generator-1.vercel.app/" className="text-blue-500 hover:underline">8. Password Generator</a></li>
            <li><a href="https://azmataliakbar-pomodoro-timer.vercel.app/" className="text-blue-500 hover:underline">9. Pomodoro Timer</a></li>
            <li><a href="https://azmataliakbar-simple-calculator-1.vercel.app/" className="text-blue-500 hover:underline">10. Simple Calculator</a></li>
            <li><a href="https://azmataliakbar-tip-calculator.vercel.app/" className="text-blue-500 hover:underline">11. Tip Calculator</a></li>
            <li><a href="https://azmataliakbar-unit-converter.vercel.app/" className="text-blue-500 hover:underline">12. Unit Calculator</a></li>
            <li><a href="https://azmataliakbar-random-joke.vercel.app/" className="text-blue-500 hover:underline">13. Random Joke</a></li>
            <li><a href="https://azmataliakbar-weather-widget.vercel.app/ " className="text-blue-500 hover:underline">14. Weather Widget</a></li>
            <li><a href="https://azmataliakba-rexpense-tracker.vercel.app/" className="text-blue-500 hover:underline">15. Expense Tracker</a></li>
            <li><a href="https://azmataliakbar-search-a-recipe.vercel.app/" className="text-blue-500 hover:underline">16. Search A Recipie</a></li>
            <li><a href="https://azmataliakbar-search-movie.vercel.app/" className="text-blue-500 hover:underline">17. Search Movie</a></li>
            <li><a href="https://azmataliakbar-mem-generator.vercel.app/" className="text-blue-500 hover:underline">18. Mem Generator</a></li>
            <li><a href="https://azmataliakbar-currency-converter.vercel.app/" className="text-blue-500 hover:underline">19. Currency Convertor</a></li>
            <li><a href="https://azmataliakbar-git-hub-viewer.vercel.app/" className="text-blue-500 hover:underline">20. Git Hub Viewer</a></li>
            <li><a href="https://azmataliakbar-word-counter.vercel.app/" className="text-blue-500 hover:underline">21. Word Counter</a></li>
            <li><a href="https://azmatalaiakbar-note-tracker.vercel.app/" className="text-blue-500 hover:underline">22. Note Tracker</a></li>
            <li><a href="https://azmataliakbar-image-sider.vercel.app/" className="text-blue-500 hover:underline">23. Image Slider</a></li>
            <li><a href="https://azmataliakbar-quiz-app.vercel.app/" className="text-blue-500 hover:underline">24. Quiz App</a></li>
            <li><a href="https://azmataliakbar-stop-watch.vercel.app/" className="text-blue-500 hover:underline">25.Stop Watch</a></li>
            <li><a href="https://azmataliakbar-snake-game.vercel.app/" className="text-blue-500 hover:underline">26. Snake Game</a></li>
            <li><a href="https://url-shortner-orcin-kappa.vercel.app/" className="text-blue-500 hover:underline">27. URL Shortner</a></li>
            <li><a href="https://azmataliakbar-todo-list.vercel.app/" className="text-blue-500 hover:underline">28. To Do List</a></li>
            <li><a href="https://azmataliakbar-random-user-generator.vercel.app/" className="text-blue-500 hover:underline">29. User Generator</a></li>
            <li><a href="https://azmatalaiakbar-audio-player.vercel.app/" className="text-blue-500 hover:underline">30. Audio Player</a></li>
            <li><a href="https://azmataliakbar-love-typescript.vercel.app/" className="text-blue-500 hover:underline">31. Love Typescript</a></li>
            <li><a href="https://azmataliakbar-zikar-allah.vercel.app/" className="text-blue-500 hover:underline">32. Zikar Allah</a></li>
            <li><a href="https://azmataliakbar-radio-quran.vercel.app/" className="text-blue-500 hover:underline">33. Radio Quran</a></li>
            <li><a href="https://azmataliakbar-country-information.vercel.app/" className="text-blue-500 hover:underline">34. Country Flags</a></li>
            <li><a href="https://azmataliakbar-prayer-clock.vercel.app/" className="text-blue-500 hover:underline">35. Prayer Clock</a></li>
            <li><a href="https://azmataliakbar-roll-a-dice.vercel.app/" className="text-blue-500 hover:underline">36.Chakka</a></li>
            <li><a href="https://azmataliakbar-flip-a-coin.vercel.app/" className="text-blue-500 hover:underline">37. Toss with Coin</a></li>
            <li><a href="https://azmataliakbar-birthday-wish-2.vercel.app/" className="text-blue-500 hover:underline">38. Birth Day Wish - 2</a></li>
            <li><a href="https://chap13-html.netlify.app/" className="text-blue-500 hover:underline">39. Samle of Cards</a></li>
            <li><a href="https://chap6-html.netlify.app/" className="text-blue-500 hover:underline">40. Periodic Table</a></li>
            <li><a href="https://azmataliakbar-image-slider1.netlify.app/" className="text-blue-500 hover:underline">41. Image Slider</a></li>
            <li><a href="https://azmataliakbar-video-clip-slider1.netlify.app/" className="text-blue-500 hover:underline">42. Video Clip Slider</a></li>
            <li><a href="https://chap10-percentage-calculator.netlify.app/" className="text-blue-500 hover:underline">43. Percentage Calculator</a></li>
            <li><a href="https://profit-calculator-by-azmat.netlify.app/" className="text-blue-500 hover:underline">44. Profit Calculator</a></li>
            <li><a href="https://azmataliakbar-icons-calendar.netlify.app/" className="text-blue-500 hover:underline">45. Icons & Calander</a></li>
            <li><a href="https://azmataliakbar-invoice-generator.netlify.app/" className="text-blue-500 hover:underline">46. Invoice Generator</a></li>
            <li><a href="https://azmataliakbar-nextjs-assignment2.netlify.app/" className="text-blue-500 hover:underline">47. Sample of Cards</a></li>
            {/* Additional Project Links */}
          </ul>
        </div>
      </section>

      <h4 className="mt-12 text-gray-500">Author: Azmat Ali</h4>
    </main>
  );
}
