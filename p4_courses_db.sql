-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Feb 2025 pada 05.07
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `p4_courses_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `courses`
--

INSERT INTO `courses` (`id`, `title`, `description`) VALUES
(4, 'Course Laravel', 'COURSE LARAVEL WPU '),
(5, 'COURSE UNITY', 'COURSE UNITY BRACKY'),
(6, 'COURSE NODE ', 'COURSE NODE WPU');

-- --------------------------------------------------------

--
-- Struktur dari tabel `videos`
--

CREATE TABLE `videos` (
  `id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `video_url` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `videos`
--

INSERT INTO `videos` (`id`, `course_id`, `title`, `video_url`) VALUES
(4, 4, 'Belajar Laravel 11 | 1. Intro', 'https://youtu.be/T1TR-RGf2Pw?si=8gtL_D1RqtDwaTs8'),
(5, 4, 'Belajar Laravel 11 | 2. Instalasi & Konfigurasi', 'https://youtu.be/nW60yGRoUrs?si=8znCsQw5OXQfVmRI'),
(6, 4, 'Belajar Laravel 11 | 3. Struktur Folder', 'https://youtu.be/x55ndgkD2QI?si=D6_Z8Db7LxQAwn23'),
(7, 4, 'Belajar Laravel 11 | 4. Blade Templating Engine', 'https://youtu.be/vDx6VA-6a6Y?si=WUcVv92pUG4JdRnj'),
(8, 4, 'Belajar Laravel 11 | 5. Blade Component', 'https://youtu.be/00o1vJYTp4I?si=QZ6Yyiv9ZtqO3-Hc'),
(9, 4, 'Belajar Laravel 11 | 6. View Data', 'https://youtu.be/76YsC4EjGE4?si=C5ugG3DIvUvkERVL'),
(10, 5, '1. How to make a 2D Platformer - Basics - Unity Tutorial', 'https://youtu.be/UbPiCgCkHTE?si=JCYXotbCrsvey7AL'),
(11, 5, '2. How to make a 2D Platformer - Unity Tutorial', 'https://youtu.be/zwNGjS_1Lxk?si=kbGvwa00etwrO_Yn'),
(12, 5, '3. How to make a 2D Platformer - Parallax Scrolling - Unity Tutorial', 'https://youtu.be/5E5_Fquw7BM?si=o0wJQZ00nh04RC5b'),
(13, 5, '4A. How to make a 2D Platformer - Tiling - Unity Tutorial', 'https://youtu.be/CwGjwnjmg2w?si=Ltc3eUw-uW5i167W'),
(14, 5, '4B. How to make a 2D Platformer - Tiling - Unity Tutorial', 'https://youtu.be/77zdOaUGguc?si=94QQ84sugkgFT7Oi'),
(15, 5, '5. How to make a 2D Platformer - CHARACTER - Unity Tutorial', 'https://youtu.be/m-J5sCRipA0?si=NXSEtrf2SlECMv-q'),
(16, 6, 'Belajar NodeJS | 1. Apa Itu NodeJS?', 'https://youtu.be/sSLJx5t4OJ4?si=4koP2E4KoskEzBDj'),
(17, 6, 'Belajar NodeJS | 2. Arsitektur NodeJS', 'https://youtu.be/wcQaspZE-20?si=gPUvVaJ9fMwhX7YY'),
(18, 6, 'Belajar NodeJS | 3. Instalasi & Konfigurasi NodeJS', 'https://youtu.be/VfN1_pEdQAA?si=Hn0F-hVlf7KcbODe'),
(19, 6, 'Belajar NodeJS | 4. Node REPL (Read - Eval - Print - Loop)', 'https://youtu.be/74a8L0HZE-Q?si=4leKhDwvWXpe6z1L'),
(20, 6, 'Belajar NodeJS | 5. Menjalankan File Node', 'https://youtu.be/Fa2BggXYE24?si=AxbZbnlOZdeOJryO'),
(21, 6, 'Belajar NodeJS | 6. NodeJS Module System', 'https://youtu.be/9hT29YQuB2U?si=eh1xCMQNA7a0CbEH');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_id` (`course_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `videos`
--
ALTER TABLE `videos`
  ADD CONSTRAINT `videos_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
