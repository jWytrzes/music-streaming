--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

-- Started on 2020-04-23 08:41:32

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 207 (class 1259 OID 16703)
-- Name: album; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.album (
    "ID" integer NOT NULL,
    name character varying NOT NULL,
    release_date date,
    description character varying,
    "artistID" integer
);


ALTER TABLE public.album OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16701)
-- Name: album_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."album_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."album_ID_seq" OWNER TO postgres;

--
-- TOC entry 2893 (class 0 OID 0)
-- Dependencies: 206
-- Name: album_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."album_ID_seq" OWNED BY public.album."ID";


--
-- TOC entry 209 (class 1259 OID 16714)
-- Name: artist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.artist (
    "ID" integer NOT NULL,
    is_band boolean,
    name character varying NOT NULL
);


ALTER TABLE public.artist OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16712)
-- Name: artist_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."artist_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."artist_ID_seq" OWNER TO postgres;

--
-- TOC entry 2894 (class 0 OID 0)
-- Dependencies: 208
-- Name: artist_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."artist_ID_seq" OWNED BY public.artist."ID";


--
-- TOC entry 203 (class 1259 OID 16676)
-- Name: genre; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.genre (
    "ID" integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.genre OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16674)
-- Name: genre_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."genre_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."genre_ID_seq" OWNER TO postgres;

--
-- TOC entry 2895 (class 0 OID 0)
-- Dependencies: 202
-- Name: genre_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."genre_ID_seq" OWNED BY public.genre."ID";


--
-- TOC entry 215 (class 1259 OID 16839)
-- Name: klient_klient_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.klient_klient_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.klient_klient_id_seq OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16745)
-- Name: playlist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.playlist (
    "ID" integer NOT NULL,
    name character varying NOT NULL,
    description character varying,
    "userID" integer NOT NULL
);


ALTER TABLE public.playlist OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16743)
-- Name: playlist_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."playlist_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."playlist_ID_seq" OWNER TO postgres;

--
-- TOC entry 2896 (class 0 OID 0)
-- Dependencies: 210
-- Name: playlist_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."playlist_ID_seq" OWNED BY public.playlist."ID";


--
-- TOC entry 216 (class 1259 OID 16854)
-- Name: pozycja_menu_pozycja_menu_id; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pozycja_menu_pozycja_menu_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pozycja_menu_pozycja_menu_id OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16687)
-- Name: track; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.track (
    "ID" integer NOT NULL,
    name character varying NOT NULL,
    duration integer NOT NULL,
    "genreID" integer,
    "albumID" integer,
    "artistID" integer
);


ALTER TABLE public.track OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16685)
-- Name: track_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."track_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."track_ID_seq" OWNER TO postgres;

--
-- TOC entry 2897 (class 0 OID 0)
-- Dependencies: 204
-- Name: track_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."track_ID_seq" OWNED BY public.track."ID";


--
-- TOC entry 214 (class 1259 OID 16765)
-- Name: track_playlists_playlist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.track_playlists_playlist (
    "trackID" integer NOT NULL,
    "playlistID" integer NOT NULL
);


ALTER TABLE public.track_playlists_playlist OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16756)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    "ID" integer NOT NULL,
    "firstName" character varying NOT NULL,
    "lastName" character varying NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16754)
-- Name: user_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."user_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."user_ID_seq" OWNER TO postgres;

--
-- TOC entry 2898 (class 0 OID 0)
-- Dependencies: 212
-- Name: user_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."user_ID_seq" OWNED BY public."user"."ID";


--
-- TOC entry 217 (class 1259 OID 16856)
-- Name: zamówienie_zamówienie_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."zamówienie_zamówienie_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."zamówienie_zamówienie_id_seq" OWNER TO postgres;

--
-- TOC entry 2735 (class 2604 OID 16706)
-- Name: album ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.album ALTER COLUMN "ID" SET DEFAULT nextval('public."album_ID_seq"'::regclass);


--
-- TOC entry 2736 (class 2604 OID 16717)
-- Name: artist ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.artist ALTER COLUMN "ID" SET DEFAULT nextval('public."artist_ID_seq"'::regclass);


--
-- TOC entry 2733 (class 2604 OID 16679)
-- Name: genre ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genre ALTER COLUMN "ID" SET DEFAULT nextval('public."genre_ID_seq"'::regclass);


--
-- TOC entry 2737 (class 2604 OID 16748)
-- Name: playlist ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.playlist ALTER COLUMN "ID" SET DEFAULT nextval('public."playlist_ID_seq"'::regclass);


--
-- TOC entry 2734 (class 2604 OID 16690)
-- Name: track ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.track ALTER COLUMN "ID" SET DEFAULT nextval('public."track_ID_seq"'::regclass);


--
-- TOC entry 2738 (class 2604 OID 16759)
-- Name: user ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN "ID" SET DEFAULT nextval('public."user_ID_seq"'::regclass);


--
-- TOC entry 2748 (class 2606 OID 16753)
-- Name: playlist PK_115a1c7e0250ce0fbb7eaa7c6e1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.playlist
    ADD CONSTRAINT "PK_115a1c7e0250ce0fbb7eaa7c6e1" PRIMARY KEY ("ID");


--
-- TOC entry 2754 (class 2606 OID 16769)
-- Name: track_playlists_playlist PK_8760c19dbdea4060f70dad97e5f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.track_playlists_playlist
    ADD CONSTRAINT "PK_8760c19dbdea4060f70dad97e5f" PRIMARY KEY ("trackID", "playlistID");


--
-- TOC entry 2746 (class 2606 OID 16722)
-- Name: artist PK_b909b8a4424ae49ffc1bbc2cbd2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.artist
    ADD CONSTRAINT "PK_b909b8a4424ae49ffc1bbc2cbd2" PRIMARY KEY ("ID");


--
-- TOC entry 2742 (class 2606 OID 16695)
-- Name: track PK_c3168c02a0d5f18feec8df94e35; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.track
    ADD CONSTRAINT "PK_c3168c02a0d5f18feec8df94e35" PRIMARY KEY ("ID");


--
-- TOC entry 2744 (class 2606 OID 16711)
-- Name: album PK_e79f0cf78bbef0681585da8598d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.album
    ADD CONSTRAINT "PK_e79f0cf78bbef0681585da8598d" PRIMARY KEY ("ID");


--
-- TOC entry 2740 (class 2606 OID 16684)
-- Name: genre PK_ec881fccb427b7fe4e7b1d8ebf4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genre
    ADD CONSTRAINT "PK_ec881fccb427b7fe4e7b1d8ebf4" PRIMARY KEY ("ID");


--
-- TOC entry 2750 (class 2606 OID 16764)
-- Name: user PK_f0eace201126c1c8be2ae32fd22; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_f0eace201126c1c8be2ae32fd22" PRIMARY KEY ("ID");


--
-- TOC entry 2751 (class 1259 OID 16771)
-- Name: IDX_56a7084dedf8072795250f3a8e; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_56a7084dedf8072795250f3a8e" ON public.track_playlists_playlist USING btree ("playlistID");


--
-- TOC entry 2752 (class 1259 OID 16770)
-- Name: IDX_57693bd813cbe731afb34d3eae; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_57693bd813cbe731afb34d3eae" ON public.track_playlists_playlist USING btree ("trackID");


--
-- TOC entry 2757 (class 2606 OID 16904)
-- Name: track FK_4dbc244505ee14d6005302031df; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.track
    ADD CONSTRAINT "FK_4dbc244505ee14d6005302031df" FOREIGN KEY ("artistID") REFERENCES public.artist("ID") ON DELETE CASCADE;


--
-- TOC entry 2761 (class 2606 OID 16782)
-- Name: track_playlists_playlist FK_56a7084dedf8072795250f3a8e1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.track_playlists_playlist
    ADD CONSTRAINT "FK_56a7084dedf8072795250f3a8e1" FOREIGN KEY ("playlistID") REFERENCES public.playlist("ID") ON DELETE CASCADE;


--
-- TOC entry 2760 (class 2606 OID 16777)
-- Name: track_playlists_playlist FK_57693bd813cbe731afb34d3eae1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.track_playlists_playlist
    ADD CONSTRAINT "FK_57693bd813cbe731afb34d3eae1" FOREIGN KEY ("trackID") REFERENCES public.track("ID") ON DELETE CASCADE;


--
-- TOC entry 2755 (class 2606 OID 16733)
-- Name: track FK_5ab1a14758197276c5f567afdea; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.track
    ADD CONSTRAINT "FK_5ab1a14758197276c5f567afdea" FOREIGN KEY ("albumID") REFERENCES public.album("ID");


--
-- TOC entry 2758 (class 2606 OID 16899)
-- Name: album FK_879b4469dbca1c5d85f25cb84b5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.album
    ADD CONSTRAINT "FK_879b4469dbca1c5d85f25cb84b5" FOREIGN KEY ("artistID") REFERENCES public.artist("ID") ON DELETE CASCADE;


--
-- TOC entry 2756 (class 2606 OID 16792)
-- Name: track FK_a8f5c19157858880ae5b1d087ca; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.track
    ADD CONSTRAINT "FK_a8f5c19157858880ae5b1d087ca" FOREIGN KEY ("genreID") REFERENCES public.genre("ID");


--
-- TOC entry 2759 (class 2606 OID 16894)
-- Name: playlist FK_d9e685b21f9e1cca075699b1e59; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.playlist
    ADD CONSTRAINT "FK_d9e685b21f9e1cca075699b1e59" FOREIGN KEY ("userID") REFERENCES public."user"("ID") ON DELETE CASCADE;


-- Completed on 2020-04-23 08:41:33

--
-- PostgreSQL database dump complete
--

