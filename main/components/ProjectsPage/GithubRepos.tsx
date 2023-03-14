// Tema
import { useContext, useState } from "react";
import { ThemeContext } from "../HomePage/ThemeProvider/ThemeContext";

// Motion e Vars
import { motion } from "framer-motion";
import { GlobalVars } from "../motionVars";

interface RepoProps {
  id: string;
  html_url: string;
  name: string;
  description: string;
  language: string;
}

export function GithubRepos() {
  const [repos, setRepos] = useState<Object | [] | any>([]);

  async function getRepos() {
    await fetch("https://api.github.com/users/StaanB/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }

  getRepos();

  // Tema
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <motion.div
        variants={GlobalVars}
        initial="elementoYFora"
        animate="elementoYEmTela"
        className="max-[1080px]:justify-center max-[1080px]:ml-5 flex flex-col w-4/6 mt-10 mr-72 divide-y divide-neutral-800"
      >
        {repos.map((repo: RepoProps) => {
          return (
            <div key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                className="flex items-center"
              >
                <h2
                  className="mt-5 mb-2 mr-4 text-2xl font-bold hover:underline"
                  style={{ color: theme.hexadecimal }}
                >
                  {repo.name}
                </h2>
              </a>
              <p className="mb-3 text-sm text-gray-400">{repo.description}</p>

              <div className="mb-5 flex items-center gap-3">
                <span className="text-sm text-gray-400 ">{repo.language}</span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
}
