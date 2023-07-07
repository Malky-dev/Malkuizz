CREATE TABLE role
    (`roleID`INT NOT NULL AUTO_INCREMENT,
    `roleLabel` VARCHAR(30) NOT NULL,
    PRIMARY KEY (roleID),
    CONSTRAINT UC_roleLabel UNIQUE (roleLabel))
;

CREATE TABLE category
    (`categoryID`INT NOT NULL AUTO_INCREMENT,
    `categoryLabel` VARCHAR(30) NOT NULL,
    PRIMARY KEY (categoryID),
    CONSTRAINT UC_categoryLabel UNIQUE (categoryLabel))
;

CREATE TABLE difficulty
    (`difficultyID`INT NOT NULL AUTO_INCREMENT,
    `difficultyLabel` VARCHAR(30) NOT NULL,
    PRIMARY KEY (difficultyID),
    CONSTRAINT UC_difficultyLabel UNIQUE (difficultyLabel))
;

CREATE TABLE user
    (`userID`INT NOT NULL AUTO_INCREMENT,
    `nickname` VARCHAR(30) NOT NULL,
    `email` VARCHAR(30) NOT NULL,
    `password` VARCHAR(64) NOT NULL,
    `roleID`INT NOT NULL,
    `isVerified`INT DEFAULT 0,
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP DEFAULT NULL,
    PRIMARY KEY (userID),
    CONSTRAINT FK_role_to_user FOREIGN KEY (roleID) REFERENCES role(roleID),
    CONSTRAINT UC_nickname UNIQUE (nickname),
    CONSTRAINT UC_email UNIQUE (email))
;

CREATE TABLE question
    (`questionID`INT NOT NULL AUTO_INCREMENT,
    `questionLabel` VARCHAR(255) NOT NULL,
    `goodAnswer` VARCHAR(50) NOT NULL,
    `badAnswer1` VARCHAR(50) NOT NULL,
    `badAnswer2` VARCHAR(50) NOT NULL,
    `badAnswer3` VARCHAR(50) NOT NULL,
    `difficultyID`INT NOT NULL,
    CONSTRAINT FK_difficulty_to_question FOREIGN KEY (difficultyID) REFERENCES difficulty(difficultyID),
    PRIMARY KEY (questionID),
    CONSTRAINT UC_questionLabel UNIQUE (questionLabel))
;

CREATE TABLE score
    (`scoreID`INT NOT NULL AUTO_INCREMENT,
    `scoreValue`INT NOT NULL,
    `userID`INT NOT NULL,
    `difficultyID`INT NOT NULL,
    `categoryID`INT NOT NULL,
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT FK_user_to_score FOREIGN KEY (userID) REFERENCES user(userID) ON DELETE CASCADE,
    CONSTRAINT FK_difficulty_to_score FOREIGN KEY (difficultyID) REFERENCES difficulty(difficultyID),
    CONSTRAINT FK_category_to_score FOREIGN KEY (categoryID) REFERENCES category(categoryID),
    PRIMARY KEY (scoreID),
    CONSTRAINT UC_scoreValue UNIQUE (scoreValue))
;

CREATE TABLE rel_question_category
    (`questionID` int,
    `categoryID` int,
    CONSTRAINT FK_pokemon_to_rel_pokemon_type FOREIGN KEY (questionID) REFERENCES question(questionID) ON DELETE CASCADE,
    CONSTRAINT FK_type_to_rel_pokemon_type FOREIGN KEY (categoryID) REFERENCES category(categoryID) ON DELETE CASCADE,
    CONSTRAINT UC_question_category UNIQUE (questionID, categoryID))
;

CREATE TABLE session
    (`userID` int,
    `token` VARCHAR(255),
    `expiration` DATETIME,
    `device` VARCHAR(50),
    `browser` VARCHAR(50),
    CONSTRAINT FK_user_to_session FOREIGN KEY (userID) REFERENCES user(userID) ON DELETE CASCADE,
    CONSTRAINT UC_token UNIQUE (token))
;

INSERT INTO role
    (`roleID`, `roleLabel`)
VALUES
    (1, 'admin'),
    (2, 'moderator'),
    (3, 'basic')
;

INSERT INTO category
    (`categoryID`, `categoryLabel`)
VALUES
  (1, 'Cinéma'),
  (2, 'Séries télé'),
  (3, 'Mangas et Comics'),
  (4, 'Jeux vidéo'),
  (5, 'Littérature'),
  (6, 'Musique'),
  (7, 'Sciences'),
  (8, 'Histoire'),
  (9, 'Géographie'),
  (10, 'Sport et Arts Martiaux');
;

INSERT INTO difficulty
    (`difficultyID`, `difficultyLabel`)
VALUES
    (1, 'easy'),
    (2, 'medium'),
    (3, 'hard'),
    (4, 'random')
;

INSERT INTO user
    (`userID`, `nickname`, `email`, `password`, `roleID`, `isVerified`, `createdAt`, `updatedAt`)
VALUES
    (1, 'Malky', 'ouicestmabite@gmail.com', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 1, 1, NOW(), null),
    (2, 'Modo', 'moderator@malkuizz.com', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 2, 1, NOW(), null),
    (3, 'Simple', 'simpleUser@malkuizz.com', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 3, 0, NOW(), null)
;

INSERT INTO question
    (`questionID`, `questionLabel`, `goodAnswer`, `badAnswer1`, `badAnswer2`, `badAnswer3`, `difficultyID`)
VALUES
  (1, 'Qui est l\'auteur de "Cyrano de Bergerac" ?', 'Edmond Rostand', 'Guy de Maupassant', 'Honoré de Balzac', 'Emile Zola', 1),
  (2, 'Dans "l\'amour du risque" quel nom porte le chien des justiciers milliardaires ?', 'Février', 'Max', 'Jonathan', 'Jennifer', 2),
  (3, 'Dans "Pulp Fiction" Qui joue le rôle de Jules Winnfield ?', 'Samuel L. Jackson', 'John Travolta', 'Bruce Willis', 'Harvey Keitel', 1),
  (4, 'Sous quel nom est plus connu l\'acide acétylsalicylique ?', 'L\'aspirine', 'La cyprine', 'La codeïne', 'L\'ibuprofen', 3),
  (5, 'Qui fut le fondateur de l\'Aïkido ?', 'Ueshiba Morihei', 'Jigoro Kano', 'Gigō Funakoshi', 'Nakayama Hakudo', 2),
  (6, 'Quel chanteuse n\'a pas signé de bande originale de James Bond ?', 'Whitney Houston', 'Sheryl Crow', 'Madonna', 'Adèle', 1),
  (7, 'Qui interprète le rôle de Joe Black dans "rencontre avec Joe Black" ?', 'Brad Pitt', 'Johnny Depp', 'Matt Damon', 'Tom Cruise', 1),
  (8, 'Dans "Usual suspects", qui raconte l\'histoire sous forme d\'un interrogatoire ?', 'Kevin Spacey', 'Gabriel Byrne', 'Benicio Del Toro', 'Stephen Baldwin', 1),
  (9, 'Quel acteur n\'a pas joué dans "Dracula" de Francis Ford Coppola ?', 'John Malkovitch', 'Anthony Hopkins', 'Keanu Reeves', 'Gary Oldman', 1),
  (10, 'Dans quel film n\'a pas joué Keanu Reeves', 'Pearl Harbor', 'Dracula', 'Matrix', 'L\'associé du diable', 1),
  (11, 'Dans "l\'associé du diable", Quel est le nom du personnage d\'Al Pacino ?', 'John Milton', 'Louis Cypher', 'Il n\'en a pas', 'Dick Connor', 2),
  (12, 'Quel film réunit Charlize Theron et Christina Ricci ?', 'Monster', 'Thelma et Louise', 'Mad Max', 'Black snake moan', 2),
  (13, 'Dans "Batman" la série animée, qui double la voix du Joker ?', 'Mark Hamil', 'Jim Carrey', 'Jared Leto', 'Jack Nicholson', 1),
  (14, 'Dans quel film entend-on la réplique "Les cons ça ose tout, c\'est même à ça qu\'on les reconnait" ?', 'Les tontons flingueurs', 'Les barbouzes', 'Le gorille vous salut bien', 'Touchez pas au grisbi', 2),
  (15, 'Quel acteur joue le rôle de Jean le domestique dans "Les tontons flingueurs" ?', 'Robert Dalban', 'Bernard Blier', 'Francis Blanche', 'Jean Lefèvre', 3),
  (16, 'Dans "Snatch" de Guy Richie, Quel est le surnom de Boris Yurinof ?', 'Boris le hachoir', 'Boris le découpeur', 'Boris l\'empaleur', 'Tous', 1);
;

INSERT INTO rel_question_category
    (`questionID`, `categoryID`)
VALUES
    (1, 5),
    (2, 2),
    (3, 1),
    (4, 7),
    (5, 8),
    (5, 10),
    (6, 1),
    (6, 6),
    (7, 1),
    (8, 2),
    (10, 1),
    (11, 1),
    (12, 1),
    (13, 2),
    (13, 3),
    (14, 1),
    (15, 1),
    (16, 1)
;