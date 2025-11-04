import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 px-6 py-10 mt-5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-30">
                <div>
                    <h2 className="text-white text-xl font-bold flex items-center gap-2 hover:underline hover:text-blue-500">
                        🎓 QuizMaster
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed">Empowering learners worldwide with interactive quizzes and comprehensive learning resources.</p>
                </div>

                <div className="responce">
                    <h3 className="text-white font-semibold mb-3 hover:underline hover:text-blue-500">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link className="text-white no-underline hover:underline hover:text-blue-500" to="/">Home</Link></li>
                        <li><Link className="text-white no-underline hover:underline hover:text-blue-500" to="/subjects ">Subjects</Link></li>
                        <li><Link className="text-white no-underline hover:underline hover:text-blue-500" to="/leaderboard">Leaderboard</Link></li>
                        <li><Link className="text-white no-underline hover:underline hover:text-blue-500" to="/blog">Blog</Link></li>
                    </ul>
                </div>

                <div className="responce">
                    <h3 className="text-white font-semibold mb-3 hover:underline hover:text-blue-500">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a className="text-white no-underline hover:underline hover:text-blue-500" href="#">Help Center</a></li>
                        <li><a className="text-white no-underline hover:underline hover:text-blue-500" href="#">Terms of Service</a></li>
                        <li><a className="text-white no-underline hover:underline hover:text-blue-500" href="#">Privacy Policy</a></li>
                        <li><a className="text-white no-underline hover:underline hover:text-blue-500" href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="responce">
                    <h3 className="text-white font-semibold mb-3 hover:underline hover:text-blue-500">Connect</h3>
                    <ul className="space-y-2 text-sm">
                        <ul className="space-y-2 ">
                            <li className="decoration-0"><a className="text-white no-underline hover:underline hover:text-blue-500" href="#">Facebook</a></li>
                            <li><a className="text-white no-underline hover:underline hover:text-blue-500" href="#">Twitter</a></li>
                            <li><a className="text-white no-underline hover:underline hover:text-blue-500" href="#">LinkedIn</a></li>
                            <li><a className="text-white no-underline hover:underline hover:text-blue-500" href="#">Instagram</a></li>
                        </ul>

                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
                <p>© 2024 QuizMaster. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0 text-white">
                    <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
                    <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                    <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
                    <FaInstagram className="hover:text-pink-400 cursor-pointer" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
